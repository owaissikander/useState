


function Button({ label, borderColor, bgColor, txColor, onClick }) {
  return (
    <button   className={`p-3 border 
      
      ${borderColor ? borderColor : "border-black-400"} 
    ${bgColor ? bgColor : "bg-slate-300"} 
    ${txColor ? txColor : 'text-black'}`}>
      {label}
    </button>
  );
}

export default Button;
