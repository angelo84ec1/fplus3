"use client";
import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";
import { Marcas } from "@/types/Marcas";
import { Inversion } from "@/types/Inversion";
import { Sector } from "@/types/Sector";
import { Accordion } from "react-bootstrap";
import Link from "next/link";
import { FaSliders } from "react-icons/fa6";

interface Props {
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
  selectedUbication: string;
  setSelectedUbication: (value: string) => void;
  selectedInversion: string;
  setSelectedInversion: (value: string) => void;
  setSelectedTipo: (value: string) => void;
  directorios: Sector[];
  estados: Sector[];
  ubicacion: Sector[];
  categoria: Sector[];
  inversion: Inversion[];
  tipo: any;
}

const BrandsFilter = ({
  selectedCategory,
  setSelectedCategory,
  selectedUbication,
  setSelectedUbication,
  selectedInversion,
  setSelectedInversion,
  setSelectedTipo,
  directorios,
  estados,
  ubicacion,
  categoria,
  inversion,
  tipo,
}: Props) => {
  const TIPO_CHOICES = [
    { text: "Franquicia", code: "Franchise" },
    { text: "Negocio", code: "Business" },
  ];
  return (
    <div className="w-[30%] lg:flex hidden flex-col gap-y-4 relative">
      <div className="text-lg ml-4">Buscar otro sector</div>
      <div className="flex flex-col gap-y-4">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="sector-select"
          name="categories"
        >
          <option value="">Categoria</option>
          {categoria.map((cat, index) => (
            <option key={index} value={cat.nombre}>
              {cat.nombre}
            </option>
          ))}
        </select>
        <select
          value={selectedUbication}
          onChange={(e) => setSelectedUbication(e.target.value)}
          className="sector-select"
          name="ubication"
        >
          <option value="">País</option>
          {ubicacion.map((ubi, index) => (
            <option key={index} value={ubi.nombre}>
              {ubi.nombre}
            </option>
          ))}
        </select>
        <select
          value={selectedInversion}
          onChange={(e) => setSelectedInversion(e.target.value)}
          className="sector-select"
          name="inversion"
        >
          <option value="">Inversión</option>
          {inversion.map((inv) => (
            <option key={inv.id} value={inv.nombre_url}>
              {inv.nombre}
            </option>
          ))}
        </select>
        <select
          value={tipo}
          onChange={(e) => setSelectedTipo(e.target.value)}
          className="sector-select"
          name="inversion"
        >
          <option value="" selected>
            Tipo
          </option>
          {TIPO_CHOICES.map((tipo, index) => (
            <option key={index} value={tipo.code}>
              {tipo.text}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default BrandsFilter;
