const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

class PaymentController {

  static processPayment = async (req, res) => {
    const { shippingAddress, amount } = req.body;
    const myPayment = await stripe.paymentIntents.create({
      shipping: {
        name: shippingAddress.name,
        address: {
          line1: shippingAddress.address,
          postal_code: shippingAddress.pinCode,
          city: shippingAddress.city,
          state: shippingAddress.state,
          country: shippingAddress.country || 'IN',
        },
      },
      amount: amount,
      currency: "INR",
      metadata: {
        company: "Ecommerce"
      }
    });
    res
      .status(200)
      .json({ success: true, client_secret: myPayment.client_secret });

  };

  static makePayment = async (req, res) => {
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        line_items: req.body.products.map(item => {
          return {
            price_data: {
              currency: "inr",
              product_data: {
                name: item.name,
                images: [item.image],
              },
              unit_amount: item.price * 100,
            },
            quantity: item.quantity,
          };
        }),
        success_url: `${process.env.CLIENT_URL}/success`,
        cancel_url: `${process.env.CLIENT_URL}/failed`,
      });
      res.json({ id: session.id });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  };
}

module.exports = PaymentController;