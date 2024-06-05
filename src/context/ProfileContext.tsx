import { User } from "src/types/user";
import { createContext, useState } from "react";

interface ProfileContextType {
  profile: User;
  initProfile: (profile: User) => void;
  updateProfile: (updatedProfile: User) => void;
}

export const ProfileContext = createContext<ProfileContextType>({
  profile: {} as User,
  initProfile: (profile: User) => {},
  updateProfile: (updatedProfile: User) => {},
});

interface Props {
  children: React.ReactElement;
}

export const ProfileProvider: React.FC<Props> = ({
  children,
}): React.ReactElement => {
  const [profile, setProfile] = useState<User>({} as User);

  const initProfile = (profile: User) => {
    setProfile(profile);
  };

  const updateProfile = (updatedProfile: User) => {
    setProfile(updatedProfile);
  };

  return (
    <ProfileContext.Provider value={{ profile, initProfile, updateProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};
