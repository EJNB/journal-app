export const getEnvironment = () => {
  // console.log(import);
  // import.meta.env

  return {
    ...import.meta.env,
  };
};
