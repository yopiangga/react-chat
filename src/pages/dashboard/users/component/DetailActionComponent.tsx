import { MouseEventHandler } from "react";
import { User } from "src/types/user";
import { Typography, Button } from "@material-tailwind/react";

export function DetailActionComponent({
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
      <div
        className="inline-block text-left bg-white rounded-lg overflow-hidden align-bottom transition-all transform
          shadow-2xl sm:my-8 sm:align-middle sm:max-w-xl sm:w-full"
      >
        <div className="items-center w-full mr-auto ml-auto relative max-w-7xl md:px-12 lg:px-24">
          <div className="grid grid-cols-1">
            <div className="mt-4 mr-auto mb-4 ml-auto bg-white max-w-lg">
              <div className="flex flex-col items-center pt-6 pr-6 pb-6 pl-6 text-center">
                <img
                  src={user!.avatar}
                  className="flex-shrink-0 object-cover object-center btn- flex w-24 h-24 mr-auto ml-auto rounded-full shadow-xl"
                />
                <Typography variant="h3" className="mt-4 font-bold">
                  {user!.name}
                </Typography>

                <Typography variant="paragraph" className="mt-2">
                  {user!.email} | {user!.website}
                </Typography>
                <Typography variant="paragraph" className="mt-2">
                  {user!.phone}
                </Typography>
                <Typography variant="paragraph" className="mt-2">
                  {user!.company.name}
                </Typography>

                <div className="mt-4 flex gap-2 justify-center">
                  <Button
                    size="sm"
                    onClick={() => {
                      callback(user);
                    }}
                  >
                    Edit
                  </Button>
                  <Button size="sm" variant="outlined" onClick={cancel}>
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
