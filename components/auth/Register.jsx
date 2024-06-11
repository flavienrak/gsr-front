"use client";

import Link from "next/link";
import toast from "react-hot-toast";

import { useContext, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { MdArrowRight, MdEmail } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { BiSolidUser } from "react-icons/bi";
import { UidContext } from "@/context/UidContext";
import { emailRegex } from "@/lib/regex";
import { Button, Input } from "../utils/Utils";
import { isEmpty } from "@/lib/functions";
import { registerController } from "@/lib/controllers/authController";

export default function Register() {
  const { addMessage, toastStyle } = useContext(UidContext);
  const { push } = useRouter();
  const form = useRef();

  const [nom, setNom] = useState({ value: "", valid: false });
  const [prenom, setPrenom] = useState({ value: "", valid: false });
  const [email, setEmail] = useState({ value: "", valid: false });
  const [password, setPassword] = useState({ value: "", valid: false });
  const [cPassword, setCPassword] = useState({ value: "", valid: false });
  const [isSubmit, setIsSubmit] = useState(false);
  const [isModified, setIsModified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
    if (prenom.value?.trim()?.length > 2) {
      setPrenom((prev) => ({ ...prev, valid: true }));
      if (isModified) {
        setIsModified(false);
      }
    } else {
      setPrenom((prev) => ({ ...prev, valid: false }));
      if (isModified) {
        setIsModified(false);
      }
    }

    // email
    if (emailRegex.test(email.value?.trim())) {
      if (!email.valid) {
        setEmail((prev) => ({ ...prev, valid: true }));
      }
      if (isModified) {
        setIsModified(false);
      }
    } else {
      if (email.valid) {
        setEmail((prev) => ({ ...prev, valid: false }));
      }
      if (isModified) {
        setIsModified(false);
      }
    }

    // password
    if (password.value?.length > 5) {
      if (!password.valid) {
        setPassword((prev) => ({ ...prev, valid: true }));
      }
      if (isModified) {
        setIsModified(false);
      }
    } else {
      if (password.valid) {
        setPassword((prev) => ({ ...prev, valid: false }));
      }
      if (isModified) {
        setIsModified(false);
      }
    }

    // cPassword
    if (
      !isEmpty(password.value) &&
      password.value?.length > 5 &&
      cPassword.value === password.value
    ) {
      if (!cPassword.valid) {
        setCPassword((prev) => ({ ...prev, valid: true }));
      }
      if (isModified) {
        setIsModified(false);
      }
    } else {
      if (cPassword.valid) {
        setCPassword((prev) => ({ ...prev, valid: false }));
      }
      if (isModified) {
        setIsModified(false);
      }
    }
  }, [nom.value, prenom.value, email.value, password.value, cPassword.value]);

  useEffect(() => {
    if (isModified) {
      if (!nom.valid) {
        toast.error("Nom invalide", toastStyle);
      } else if (!prenom.valid) {
        toast.error("Prenom invalide", toastStyle);
      } else if (!email.valid) {
        toast.error("Email invalide", toastStyle);
      } else if (!password.valid) {
        toast.error("Mot de passe moins de 6 caracteres", toastStyle);
      } else if (!cPassword.valid) {
        toast.error("Veirifier les mots de passes", toastStyle);
      }
    }
  }, [isModified]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmit(true);
    setIsModified(true);

    if (
      nom.valid &&
      prenom.valid &&
      email.valid &&
      password.valid &&
      cPassword.valid
    ) {
      setIsLoading(true);
      const toastId = toast.loading("Inscription", toastStyle);
      const res = await registerController({
        name: nom.value,
        username: prenom.value,
        email: email.value,
        password: password.value,
      });
      toast.dismiss(toastId);
      setIsLoading(false);

      if (res?.userAlreadyExist) {
        toast.error("L'utilisateur existe deja", toastStyle);
      } else if (res?.user) {
        toast.success("Votre compte vient d'etre cree", toastStyle);
        push("/home?path=login");
      }
    }
  };

  return (
    <div className="flex justify-between items-center h-full w-full z-10 p-10">
      <div className="flex justify-center items-center h-full w-1/2 flex-col gap-8">
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 w-96 "
        >
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-4">
              <Input
                id={"name"}
                type={"text"}
                label={"Nom"}
                placeholder={" "}
                icon={<BiSolidUser size={"1.15rem"} />}
                value={nom.value}
                error={isSubmit && !nom.valid}
                onChange={(e) =>
                  setNom((prev) => ({ ...prev, value: e.target.value }))
                }
              />
              <Input
                id={"username"}
                type={"text"}
                label={"Prenom"}
                placeholder={" "}
                icon={<BiSolidUser size={"1.15rem"} />}
                value={prenom.value}
                error={isSubmit && !prenom.valid}
                onChange={(e) =>
                  setPrenom((prev) => ({ ...prev, value: e.target.value }))
                }
              />
              <Input
                id={"email"}
                type={"email"}
                label={"Adresse e-mail"}
                placeholder={" "}
                icon={<MdEmail size={"1.15rem"} />}
                value={email.value}
                error={isSubmit && !email.valid}
                onChange={(e) =>
                  setEmail((prev) => ({ ...prev, value: e.target.value }))
                }
              />
              <Input
                id={"password"}
                type={"password"}
                label={"Mot de passe"}
                placeholder={" "}
                icon={<IoMdLock size={"1.15rem"} />}
                value={password.value}
                error={isSubmit && !password.valid}
                onChange={(e) =>
                  setPassword((prev) => ({ ...prev, value: e.target.value }))
                }
              />
              <Input
                id={"cPassword"}
                type={"password"}
                label={"Confirmer mot de passe"}
                placeholder={" "}
                icon={<IoMdLock size={"1.15rem"} />}
                value={cPassword.value}
                error={isSubmit && !cPassword.valid}
                onChange={(e) =>
                  setCPassword((prev) => ({ ...prev, value: e.target.value }))
                }
              />
            </div>
            <Button
              label={"Inscription"}
              type={"submit"}
              valid={
                nom.valid &&
                prenom.valid &&
                email.valid &&
                password.valid &&
                cPassword.valid
              }
              icon={<MdArrowRight size={"1.5rem"} />}
            />
          </div>
        </form>
        <div className="relative flex justify-center items-center gap-1 opacity-50">
          <span className="h-1 rounded-full w-1 bg-[var(--bg)]"> </span>
          <span className="h-1 rounded-full w-4 bg-[var(--bg)]"> </span>
        </div>
      </div>
      <div className="flex flex-col gap-10 h-full justify-center w-1/2 items-center">
        <h1 className="text-white font-extrabold text-8xl h-1/2">
          <span className="text-8xl bgText">Creer un</span>{" "}
          <p className="text-8xl pl-24">
            <span className="text-8xl bgText pl-1">compte</span> pour
          </p>
          <span className="text-8xl pl-24">commencer.</span>
        </h1>
        <div className="flex flex-col gap-10">
          <p className="text-[var(--cont)] text-md font-extralight pl-28">
            En s{"'"}inscrivant, vous decouvrirez toutes les fonctionnalites
            disponibles et mises en services sur notre plateforme.
          </p>
          <div className="pl-10">
            <div className="bg-[var(--bg-4)] w-full h-[0.5px]"></div>
          </div>
          <div className="flex items-center gap-1 w-full pl-10">
            <p className="text-[var(--cont)]">
              Vous avez deja un compte enregistré ?
            </p>
            <Link
              href={{
                pathname: "/auth",
                query: {
                  path: "login",
                },
              }}
              className="flex justify-center items-center"
            >
              <span className="hover:underline text-[var(--primary-color)] transition-all duration-100">
                Se connecter
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
