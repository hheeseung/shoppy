export default function Button({ text, onClick, disabled }) {
  return (
    <button
      className="w-full bg-brand text-white py-2 px-4 rounded-md hover:brightness-110"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
