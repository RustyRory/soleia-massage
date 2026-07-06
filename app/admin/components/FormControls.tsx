import type { ActionState } from "../actions";

export function Field({
  label,
  name,
  defaultValue,
  type = "text",
}: {
  label: string;
  name: string;
  defaultValue?: string;
  type?: string;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-xs tracking-widest uppercase text-[#7A6652]">{label}</span>
      <input
        name={name}
        type={type}
        defaultValue={defaultValue}
        className="border-b border-[#E8D8CC] bg-transparent py-2.5 text-[#2D2416] placeholder:text-[#C4B09A] outline-none focus:border-[#C07A4A] transition-colors text-sm"
      />
    </label>
  );
}

export function TextAreaField({
  label,
  name,
  defaultValue,
  rows = 3,
}: {
  label: string;
  name: string;
  defaultValue?: string;
  rows?: number;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-xs tracking-widest uppercase text-[#7A6652]">{label}</span>
      <textarea
        name={name}
        defaultValue={defaultValue}
        rows={rows}
        className="border border-[#E8D8CC] rounded-lg bg-transparent p-3 text-[#2D2416] placeholder:text-[#C4B09A] outline-none focus:border-[#C07A4A] transition-colors text-sm resize-none"
      />
    </label>
  );
}

export function FormFooter({ pending, state }: { pending: boolean; state: ActionState }) {
  return (
    <div className="flex flex-wrap items-center gap-4 pt-2">
      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center gap-2 px-6 py-3 bg-[#C07A4A] text-white text-sm rounded-full hover:bg-[#9A5C34] transition-colors duration-200 disabled:opacity-60"
      >
        {pending ? "Enregistrement..." : "Enregistrer"}
      </button>
      {state?.error && (
        <p className="text-sm text-[#B5452F]" role="alert">
          {state.error}
        </p>
      )}
      {state?.success && <p className="text-sm text-[#4A7A5C]">{state.success}</p>}
    </div>
  );
}
