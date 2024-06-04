import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

import { useContext, useEffect, useState } from "react";
import { UserContext } from "src/context/UserContext";
import { UserServices } from "src/services/UserServices";
import { Button } from "@material-tailwind/react";
import { FiTrash, FiEye } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import LoadComponent from "src/widgets/load";
import { User } from "src/types/user";
import { DeleteActionComponent, DetailActionComponent } from "./component";

export function UsersPage() {
  const navigate = useNavigate();
  const userServices = new UserServices();
  const { users, initUsers, deleteUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);

  const [user, setUser] = useState<User>();
  const [detailModal, setDetailModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  useEffect(() => {
    if (users.length === 0) fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    const response = await userServices.getUsers();
    const userWithImages = response.map((user: User) => ({
      ...user,
      avatar: `https://picsum.photos/50?random=${user.id}`,
    }));
    initUsers(userWithImages);

    setIsLoading(false);
  };

  function handleDelete(id: string) {
    deleteUser(id);
    setDeleteModal(false);
  }

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12 min-h-[calc(100vh-200px)]">
      <Card>
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-8 p-6 flex items-center justify-between"
        >
          <Typography variant="h6" color="white">
            Users Table
          </Typography>
          <Button
            size="sm"
            color="white"
            onClick={() => {
              navigate("/dashboard/users/add");
            }}
          >
            Add User
          </Button>
        </CardHeader>

        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["user", "function", "company", ""].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => {
                const className = `py-3 px-5 ${
                  parseInt(user.id) == users.length - 1
                    ? ""
                    : "border-b border-blue-gray-50"
                }`;

                return (
                  <tr key={index}>
                    <td className={className}>
                      <div className="flex items-center gap-4">
                        <Avatar
                          src={user.avatar}
                          alt={user.name}
                          size="sm"
                          variant="rounded"
                        />
                        <div>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-semibold"
                          >
                            {user.name}
                          </Typography>
                          <Typography className="text-xs font-normal text-blue-gray-500">
                            {user.email}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={className}>
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        {user.company.catchPhrase}
                      </Typography>
                      <Typography className="text-xs font-normal text-blue-gray-500">
                        {user.company.bs}
                      </Typography>
                    </td>
                    <td className={className}>
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        {user.company.name}
                      </Typography>
                    </td>
                    <td className={`${className} flex gap-1`}>
                      <Button
                        size="sm"
                        onClick={() => {
                          setUser(user);
                          setDetailModal(true);
                        }}
                      >
                        <FiEye />
                      </Button>
                      <Button
                        size="sm"
                        color="red"
                        onClick={() => {
                          setUser(user);
                          setDeleteModal(true);
                        }}
                      >
                        <FiTrash />
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardBody>
      </Card>

      {isLoading && <LoadComponent />}

      {detailModal == true ? (
        <DetailActionComponent
          open={detailModal}
          user={user}
          callback={(user: User) => {
            setDetailModal(false);
            navigate(`/dashboard/users/edit/${user.id}`);
          }}
          cancel={() => setDetailModal(false)}
        />
      ) : null}

      {deleteModal == true ? (
        <DeleteActionComponent
          open={deleteModal}
          user={user}
          callback={(id: string) => {
            handleDelete(id);
          }}
          cancel={() => setDeleteModal(false)}
        />
      ) : null}
    </div>
  );
}
