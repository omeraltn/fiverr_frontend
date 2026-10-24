import type { FC } from "react";
import { useDeleteGig } from "../../service.ts/gig";
import Loader from "../loader";

interface Props {
  id: string;
  show?: boolean;
}

const DeleteButton: FC<Props> = ({ id, show }) => {
  const { mutate, isPending } = useDeleteGig();

  if (!show) return;

  return (
    <div className="flex justify-end px-2">
      <button
        onClick={() => mutate(id)}
        disabled={isPending}
        className="button bg-red-500 cursor-pointer h-8 hover:bg-red-600"
      >
        {isPending ? <Loader designs="!text-lg text-white" /> : "Sil"}
      </button>
    </div>
  );
};

export default DeleteButton;
