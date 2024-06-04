import {
  Card,
  CardBody,
  Avatar,
  Typography,
  Button,
} from "@material-tailwind/react";

export function ProfilePage() {
  return (
    <div className="min-h-[calc(100vh-200px)]">
      <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl">
        <img
          src="/img/background-image.png"
          alt="bruce-mars"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
      </div>
      <Card className="mx-3 -mt-16 mb-6 lg:mx-4 border border-blue-gray-100">
        <CardBody className="p-4">
          <div className="flex items-center justify-between flex-wrap gap-6">
            <div className="flex items-center gap-6">
              <Avatar
                src="/img/avatar.png"
                alt="bruce-mars"
                size="xl"
                variant="rounded"
                className="rounded-lg shadow-lg shadow-blue-gray-500/40"
              />
              <div>
                <Typography variant="h5" color="blue-gray" className="mb-1">
                  Alfian Prisma Yopiangga
                </Typography>
                <Typography
                  variant="h6"
                  className="font-normal text-blue-gray-600"
                >
                  developer@alfian-py.com
                </Typography>
              </div>
            </div>

            <Button size="md" className="" onClick={() => {}}>
              <Typography variant="small">Log Out</Typography>
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
