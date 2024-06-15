"use client";

import Link from "next/link";
import Image from "next/image";

import { useContext, useEffect, useRef, useState } from "react";
import { RiAddLargeLine } from "react-icons/ri";
import { InputText, TextareaText } from "../utils/InputType";
import { IoCameraOutline } from "react-icons/io5";
import { UidContext } from "@/context/UidContext";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { isEmpty } from "@/lib/functions";
import { createServiceController } from "@/lib/controllers/serviceController";

const inputTypes = [
  {
    label: "Texte",
    value: "text",
  },
  {
    label: "Date",
    value: "date",
  },
  {
    label: "CIN",
    value: "cin",
  },
  {
    label: "Numero de telephone",
    value: "num",
  },
  {
    label: "Fichier",
    value: "file",
  },
];

export default function CreateService() {
  const { path, userId } = useContext(UidContext);
  const form = useRef(null);

  const [nom, setNom] = useState({ value: "", valid: false });
  const [description, setDescription] = useState({ value: "", valid: false });
  const [tarif, setTarif] = useState({ value: "0", valid: true });
  const [actualUrl, setActualUrl] = useState("");
  const [image, setImage] = useState({ value: "", valid: false });
  const [file, setFile] = useState(null);
  const [duree, setDuree] = useState({ value: "0", valid: false });
  const [actualInfos, setActualInfos] = useState({
    value: "",
    valid: false,
  });
  const [actualType, setActualType] = useState({
    value: "Texte",
    valid: true,
  });
  const [collapse, setCollapse] = useState(false);
  const [infos, setInfos] = useState({ value: [], valid: false });
  const [canSubmit, setCanSubmit] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isModified, setIsModified] = useState(false);

  useEffect(() => {
    if (form?.current) {
      form.current.reset();
    }

    // nom
    if (nom.value?.trim()?.length > 2) {
      if (!nom.valid) {
        setNom((prev) => ({ ...prev, valid: true }));
      }
      if (isModified) {
        setIsModified(false);
      }
    } else {
      if (nom.valid) {
        setNom((prev) => ({ ...prev, valid: false }));
      }
      if (isModified) {
        setIsModified(false);
      }
    }

    // prenom
    if (description.value?.trim()?.length > 5) {
      setDescription((prev) => ({ ...prev, valid: true }));
      if (isModified) {
        setIsModified(false);
      }
    } else {
      setDescription((prev) => ({ ...prev, valid: false }));
      if (isModified) {
        setIsModified(false);
      }
    }

    // tarif
    if (tarif.value?.trim()) {
      setTarif((prev) => ({ ...prev, valid: true }));
      if (isModified) {
        setIsModified(false);
      }
    } else {
      setTarif((prev) => ({ ...prev, valid: false }));
      if (isModified) {
        setIsModified(false);
      }
    }

    // duree
    if (duree.value?.trim() != 0) {
      setDuree((prev) => ({ ...prev, valid: true }));
      if (isModified) {
        setIsModified(false);
      }
    } else {
      setDuree((prev) => ({ ...prev, valid: false }));
      if (isModified) {
        setIsModified(false);
      }
    }
  }, [nom.value, description.value, tarif.value, duree.value]);

  useEffect(() => {
    // actual infos
    if (actualInfos.value?.trim()?.length > 2 && !isEmpty(actualType.value)) {
      setActualInfos((prev) => ({ ...prev, valid: true }));
    } else {
      setActualInfos((prev) => ({ ...prev, valid: false }));
    }
  }, [actualInfos.value, actualType.value]);

  useEffect(() => {
    if (!isEmpty(file)) {
      const newUrl = URL.createObjectURL(file);
      setActualUrl(newUrl);

      if (!canSubmit) {
        setCanSubmit(true);
      }
      return () => {
        URL.revokeObjectURL(newUrl);
      };
    }
  }, [file]);

  const handleAdd = () => {
    if (actualInfos.valid && actualType.valid) {
      setInfos((prev) => {
        let newState = { ...prev };
        let newValue = { name: actualInfos.value, type: actualType.value };
        newState.valid = true;
        newState.value = [...newState.value, newValue];
        return newState;
      });
      setActualInfos({ valid: false, value: "" });
    }
  };

  const handleDelete = (index) => {
    setInfos((prev) => {
      let newState = { ...prev };
      newState.valid = true;
      newState.value = [
        ...newState.value.slice(0, index),
        ...newState.value.slice(index + 1),
      ];
      return newState;
    });
  };

  const handleEnter = (e, actual) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAdd(actual);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmit(true);

    if (
      nom.valid &&
      description.valid &&
      tarif.valid &&
      duree.valid &&
      infos.valid
    ) {
      const res = await createServiceController({
        id: userId,
        name: nom.value,
        description: description.value,
        tarif: tarif.value,
        duree: duree.value,
        infos: infos.value,
      });
      console.log(res);
    }
  };

  return (
    <div className="w-full flex  flex-col gap-4">
      <form
        ref={form}
        className="w-full  flex flex-col  gap-4  p-10 bg-[var(--white)] rounded-xl "
        onSubmit={handleSubmit}
      >
        <p className="text-4xl font-bold">Création de service</p>
        <div className=" w-full flex items-center gap-8 ">
          <div className="w-1/3 rounded-full flex justify-center items-center">
            {!isEmpty(actualUrl) ? (
              <div className="relative w-40 h-40">
                <Image
                  src={actualUrl}
                  alt=""
                  fill
                  objectFit={"cover"}
                  className={"rounded-full"}
                />
                {/* <i className={"absolute text-[var(--color-gray)]"}>
                  <IoCameraOutline size={"1rem"} />
                </i> */}
              </div>
            ) : (
              <div className="relative w-40 h-40">
                <label
                  htmlFor={"file"}
                  className={
                    "h-full w-full rounded-full flex justify-center items-center border border-[var(--color-gray)] cursor-pointer"
                  }
                >
                  <i className={"text-[var(--color-gray)]"}>
                    <IoCameraOutline size={"2rem"} />
                  </i>
                  <input
                    type="file"
                    id={"file"}
                    accept={".jpg, .jpeg, .png"}
                    className={"hidden"}
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </label>
              </div>
            )}
          </div>

          <div className=" w-full flex flex-col gap-4">
            <InputText
              id={"nom"}
              label={"Nom du service"}
              placeholder={"Payement impots"}
              value={nom.value}
              onChange={(e) =>
                setNom((prev) => ({ ...prev, value: e.target.value }))
              }
            />

            <TextareaText
              id={"description"}
              label={"Description du service"}
              placeholder={"Decrire le service ici"}
              rows={4}
              value={description.value}
              onChange={(e) =>
                setDescription((prev) => ({ ...prev, value: e.target.value }))
              }
            />
          </div>
        </div>

        <div className=" w-full flex items-center gap-8">
          <div className="w-1/2">
            <InputText
              id={"tarif"}
              label={"Tarif"}
              placeholder={"Tarif"}
              value={tarif.value}
              onChange={(e) =>
                setTarif((prev) => ({ ...prev, value: e.target.value }))
              }
            />
          </div>
          <div className="w-1/2">
            <InputText
              id={"duree"}
              label={"Duree"}
              placeholder={"Duree"}
              value={duree.value}
              onChange={(e) =>
                setDuree((prev) => ({ ...prev, value: e.target.value }))
              }
            />
          </div>
        </div>

        <div className="flex justify-between w-full">
          <label className="font-semibold text-2xl text-[var(--primary-color)]">
            Informations requises
          </label>
          <p
            className=" flex items-center gap-2 text-[var(--white)] py-2 px-4 bg-[var(--primary-color)] w-max rounded-md"
            onClick={handleAdd}
          >
            <i>
              <RiAddLargeLine size={"1rem"} />
            </i>
            <span>Ajouter</span>
          </p>
        </div>

        <div className="w-full flex items-center gap-8">
          <div className="w-1/2">
            <InputText
              id={"nom"}
              label={"Nom de l'information"}
              placeholder={"Un nom"}
              value={actualInfos.value}
              onChange={(e) =>
                setActualInfos((prev) => ({ ...prev, value: e.target.value }))
              }
            />
          </div>
          <div className="w-1/2 flex flex-col gap-1">
            <label htmlFor={"select"} className="font-semibold">
              Type d{"'"}information
            </label>
            <div className="relative w-full">
              <input
                id={"select"}
                type={"text"}
                placeholder={"Texte"}
                value={actualType.value}
                onChange={(e) =>
                  setActualType((prev) => ({ ...prev, value: e.target.value }))
                }
                onFocus={() => setCollapse(true)}
                className={`bg-[var(--color-light)] rounded-md py-3 px-4 w-full placeholder:text-[var(--color-gray)] placeholder:font-light focus:outline-1 focus:outline-[var(--primary-color)] focus:outline-offset-0`}
              />
              {collapse && (
                <div className="absolute bottom-full w-full bg-[var(--white)] shadow-md rounded-md p-4">
                  {inputTypes.map((inputType) => (
                    <p
                      key={inputType.value}
                      className={
                        "text-light text-sm hover:bg-[var(--color-light)] w-full px-2 py-1 cursor-pointer"
                      }
                      onClick={() => {
                        setActualType((prev) => ({
                          ...prev,
                          value: inputType.label,
                          valid: true,
                        }));
                        setCollapse(false);
                      }}
                    >
                      {inputType.label}
                    </p>
                  ))}
                </div>
              )}
            </div>
            {/* <option value="Text">Text</option>
              <option value="Numéro telephone">Numéro telephone</option>
              <option value="CIN">CIN</option>
              <option value="Fichier">Fichier</option>
              <option value="Date">Date</option> */}
          </div>
        </div>

        {!isEmpty(infos.value) && (
          <div
            className="pl-4 w-1/2 pr-4
        "
          >
            <ul className={"flex flex-col gap-2"}>
              {infos.value.map((item, index) => (
                <li key={item} className={"flex items-center justify-between"}>
                  <span className={""}>
                    {index}- {item.name}
                  </span>
                  <p className={"flex items-center gap-2"}>
                    <span
                      className={
                        "bg-[var(--color-light)] px-4 py-2 rounded-md text-xs"
                      }
                    >
                      {item.type}
                    </span>
                    <i
                      onClick={() => handleDelete(index)}
                      className={"cursor-pointer"}
                    >
                      <IoIosCloseCircleOutline size={"1.15rem"} />
                    </i>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className=" w-full flex items-center gap-8  justify-end">
          <Link
            href={{
              pathname: path,
              query: {
                path: "accueil",
              },
            }}
            className="py-2 px-16  text-[var(--primary-color)] border border-[var(--primary-color)] rounded-md"
          >
            Annuler
          </Link>
          <button
            type="submit"
            className="py-2 px-16  text-[var(--white)] bg-[var(--primary-color)] rounded-md "
          >
            Créer
          </button>
        </div>
      </form>
    </div>
  );
}
