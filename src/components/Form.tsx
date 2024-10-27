import { useState } from "react";
import { Plus } from "./icons/plus";
type FormProps = {
    onSubmit: (text: string) => void
}

export function Form(props: FormProps) {
    const [state, setState] = useState("");

    return (
        <>
            <form onSubmit={(event) => {
                event.preventDefault();
                if (state) {
                    props.onSubmit(state);
                    setState("");
                }
            }}>
                <div className="flex flex-row w-full mt-4">
                    <input
                        className="h-[50px] flex-1 rounded-l-lg p-3 text-lg outline-none"
                        onChange={(event) => setState(event.target.value)}
                        value={state}
                        placeholder="Adicionar tarefa"
                    />
                    <button
                        className="h-[50px] pl-4 pr-4 bg-green-400 hover:bg-green-500 rounded-r-lg font-bold text-green-700 hover:text-white"
                        type="submit"
                    >
                        <Plus className="text-2xl" />
                    </button>
                </div>
            </form>
        </>
    )
}

