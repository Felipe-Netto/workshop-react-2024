import { Checked } from "./icons/checked";
import { Unchecked } from "./icons/unchecked";
import { Trash } from "./icons/trash";


export function Item(props: { text: string, completed: boolean, onClick: () => void, removerItem: () => void }) {

    return (
        <div className="w-full flex">
            <div
            onClick={props.onClick}
            className="flex flex-row min-h-[50px] w-5/6 items-center cursor-pointer hover:bg-zinc-600 bg-zinc-700 mb-1 rounded-l-lg p-3"
        >
            {props.completed ? (
                <Checked className=" text-white text-3xl mr-3" />
            ) : (
                <Unchecked className=" text-white text-3xl mr-3" />
            )}
            <label className="text-white text-xl">{props.text}</label>
            </div>
            <div onClick={props.removerItem} className="w-1/6 flex items-center justify-center bg-red-400 hover:bg-red-600 min-h-[50px] mb-1 rounded-r-lg cursor-pointer text-red-700 hover:text-white">
                <Trash />
            </div>

        </div>
        
    )
}