function SectionTitle({ title, style, hStyle }) {
  return (
    <div className={`flex flex-row items-center justify-center gap-2 ${style}`}>
      <h2 className={`text-2xl font-bold text-dark md:whitespace-nowrap ${hStyle}`}>{title}</h2>
      <hr className="w-full border-dashed bg-[#bec5cb]" />
    </div>
  );
}

export default SectionTitle;
