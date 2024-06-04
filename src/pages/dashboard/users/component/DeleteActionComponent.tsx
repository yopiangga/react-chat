import { MouseEventHandler } from "react";
import { User } from "src/types/user";
import { Typography, Button } from "@material-tailwind/react";

export function DeleteActionComponent({
  user,
  callback,
  cancel,
  open,
}: {
  user?: User;
  callback: Function;
  cancel: MouseEventHandler<HTMLButtonElement>;
  open: boolean;
}) {
  return (
    <div
      className={`${
        open ? "visible" : "invisible"
      } fixed bg-black bg-opacity-40 left-0 top-0 w-full h-full z-50 flex justify-center items-center`}
    >
      <div className="max-h[calc(100vh-5em)] h-fit max-w-lg bg-white p-5 rounded-xl text-center">
        <Typography variant="h5" className="mt-0 font-bold">
          {user!.name}
        </Typography>
        <Typography variant="paragraph" className="mt-2">
          Are you sure you want to delete this user? This action cannot be
          undone.
        </Typography>
        <div className="mt-4 flex gap-2 justify-center">
          <Button
            size="sm"
            variant="outlined"
            onClick={() => {
              callback(user!.id);
            }}
          >
            Delete
          </Button>
          <Button size="sm" onClick={cancel}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}
