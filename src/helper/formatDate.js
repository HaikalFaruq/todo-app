const formatDate = (dateString) => {
  const date = new Date(dateString);
  const option = { year: "numeric", month: "long", day: "numeric" };
  return new Intl.DateTimeFormat("id", option).format(date);
};

export { formatDate };
