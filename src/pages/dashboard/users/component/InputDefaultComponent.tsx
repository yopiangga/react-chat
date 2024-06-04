import { Typography, Input } from "@material-tailwind/react";

export function InputDefaultComponent({
  label,
  name,
  value,
  handleChange,
}: {
  label: string;
  name: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <>
      <Typography
        variant="small"
        color="blue-gray"
        className="-mb-3 font-medium"
      >
        {label}
      </Typography>
      <Input
        name={name}
        value={value}
        onChange={handleChange}
        size="lg"
        placeholder=""
        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
        crossOrigin=""
      />
    </>
  );
}
