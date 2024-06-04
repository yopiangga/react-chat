import { Button, Typography } from "@material-tailwind/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "src/context/UserContext";
import { User } from "src/types/user";
import { InputDefaultComponent } from "./component";

export function UserAddPage() {
  const navigate = useNavigate();
  const { users, addUser } = useContext(UserContext);

  const [user, setUser] = useState<User>({
    id: "",
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
    avatar: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const tempUser = {
      ...user,
      id: (users.length + 1).toString(),
      avatar: `https://picsum.photos/50?random=${users.length + 1}`,
    };
    addUser(tempUser);
    navigate("/dashboard/users");
  }

  return (
    <div className="flex flex-col gap-12 min-h-[calc(100vh-200px)]">
      <div className="bgt-white shadow-lg rounded-xl p-10">
        <Typography variant="h6" color="gray">
          Add User
        </Typography>
        <form className="mt-8 mb-2" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 lg:gap-10 gap-5">
            <div className="mb-1 flex flex-col gap-5 lg:col-span-1 col-span-2">
              <InputDefaultComponent
                label="Fullname"
                name="name"
                value={user!.name}
                handleChange={handleChange}
              />

              <InputDefaultComponent
                label="Username"
                name="username"
                value={user!.username}
                handleChange={handleChange}
              />

              <InputDefaultComponent
                label="Email"
                name="email"
                value={user!.email}
                handleChange={handleChange}
              />

              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-5 col-span-2">
                  <InputDefaultComponent
                    label="Address"
                    name="street"
                    value={user!.address.street}
                    handleChange={(e) => {
                      setUser({
                        ...user,
                        address: { ...user.address, street: e.target.value },
                      });
                    }}
                  />
                </div>
                <div className="flex flex-col gap-5 lg:col-span-1 col-span-2">
                  <InputDefaultComponent
                    label="Suite"
                    name="suite"
                    value={user!.address.suite}
                    handleChange={(e) => {
                      setUser({
                        ...user,
                        address: { ...user.address, suite: e.target.value },
                      });
                    }}
                  />
                </div>
                <div className="flex flex-col gap-5 lg:col-span-1 col-span-2">
                  <InputDefaultComponent
                    label="City"
                    name="city"
                    value={user!.address.city}
                    handleChange={(e) => {
                      setUser({
                        ...user,
                        address: { ...user.address, city: e.target.value },
                      });
                    }}
                  />
                </div>
                <div className="flex flex-col gap-5 col-span-1">
                  <InputDefaultComponent
                    label="Zipcode"
                    name="zipcode"
                    value={user!.address.zipcode}
                    handleChange={(e) => {
                      setUser({
                        ...user,
                        address: { ...user.address, zipcode: e.target.value },
                      });
                    }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-5 lg:col-span-1 col-span-2">
                  <InputDefaultComponent
                    label="Latitude"
                    name="latitude"
                    value={user!.address.geo.lat}
                    handleChange={(e) => {
                      setUser({
                        ...user,
                        address: {
                          ...user.address,
                          geo: { ...user.address.geo, lat: e.target.value },
                        },
                      });
                    }}
                  />
                </div>
                <div className="flex flex-col gap-5 lg:col-span-1 col-span-2">
                  <InputDefaultComponent
                    label="Longitude"
                    name="longitude"
                    value={user!.address.geo.lng}
                    handleChange={(e) => {
                      setUser({
                        ...user,
                        address: {
                          ...user.address,
                          geo: { ...user.address.geo, lng: e.target.value },
                        },
                      });
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="mb-1 flex flex-col gap-5 lg:col-span-1 col-span-2">
              <InputDefaultComponent
                label="Phone"
                name="phone"
                value={user!.phone}
                handleChange={handleChange}
              />

              <InputDefaultComponent
                label="Website"
                name="website"
                value={user!.website}
                handleChange={handleChange}
              />

              <InputDefaultComponent
                label="Company Name"
                name="company-name"
                value={user!.company.name}
                handleChange={(e) => {
                  setUser({
                    ...user,
                    company: { ...user.company, name: e.target.value },
                  });
                }}
              />

              <InputDefaultComponent
                label="Catch Phrase"
                name="catchPhrase"
                value={user!.company.catchPhrase}
                handleChange={(e) => {
                  setUser({
                    ...user,
                    company: { ...user.company, catchPhrase: e.target.value },
                  });
                }}
              />

              <InputDefaultComponent
                label="BS"
                name="bs"
                value={user!.company.bs}
                handleChange={(e) => {
                  setUser({
                    ...user,
                    company: { ...user.company, bs: e.target.value },
                  });
                }}
              />
            </div>
          </div>

          <div className="flex mt-8 gap-4">
            <Button size="lg" type="submit">
              Save Changes
            </Button>

            <Button
              variant="outlined"
              onClick={() => {
                navigate(-1);
              }}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
