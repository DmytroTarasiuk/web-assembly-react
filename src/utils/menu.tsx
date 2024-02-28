import HomeIcon from "@mui/icons-material/Home";

export const menu = [
  {
    name: "Home",
    route: "/",
  },
];

export const getMenuIcon = (name: string) => {
  switch (name) {
    case "Home":
      return <HomeIcon />;
    default:
      return null;
  }
};
