const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const createServiceController = async ({
  id,
  name,
  description,
  tarif,
  duree,
  infos,
}) => {
  return await fetch(`${apiUrl}/user/${id}/create-service`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, description, tarif, duree, infos }),
  }).then((res) => res.json());
};

export const getAllServicesController = async () => {
  return await fetch(`${apiUrl}/user/${id}/service/get-all`).then((res) =>
    res.json()
  );
};
