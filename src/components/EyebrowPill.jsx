export default function EyebrowPill({ children }) {
  return (
    <span
      className="inline-block max-w-[306px] rounded-[4px] px-[16px] py-[7px] text-center text-[12px] font-bold uppercase tracking-[0.1em] text-[#6E5247]"
      style={{
        background: "rgba(255,255,255,0.55)",
        boxShadow: "inset 0 0 0 1px rgba(212,196,229,0.72)",
      }}
    >
      {children}
    </span>
  );
}
