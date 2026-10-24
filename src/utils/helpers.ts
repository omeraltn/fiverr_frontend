export const getProfilePicture = (url: string) => {
  return url === "default" ? "/default.jpg" : url;
};
