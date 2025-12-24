export default function Input({
    label,
    required,
    type = "text",
    placeholder,
    ...props
}) {
    return (
        <div className="relative mb-5">
            <input
                {...props}
                type={type}
                placeholder={placeholder}
                className="peer w-full px-3 py-3 border rounded-md text-sm outline-none
                   focus:border-purple-600"
            />

            <label
                className="absolute left-3 -top-2 bg-white px-1 text-xs
                   text-purple-600 font-medium"
            >
                {label}
                {required && <span className="text-red-500">*</span>}
            </label>
        </div>
    );
}
