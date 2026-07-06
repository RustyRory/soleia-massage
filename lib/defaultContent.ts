export type TarifItem = {
  duree: string;
  prix: string;
};

export type Bienfait = {
  title: string;
  description: string;
};

export type SiteContent = {
  contact: {
    phoneDisplay: string;
    phoneHref: string;
    email: string;
    instagram: string;
    addressName: string;
    addressLine: string;
    horaires: string;
  };
  tarifs: {
    intro: string;
    items: TarifItem[];
    domicileNote: string;
  };
  hero: {
    tagline: string;
  };
  about: {
    paragraphs: string[];
  };
  services: {
    intro: string;
    bienfaits: Bienfait[];
  };
};

export const defaultContent: SiteContent = {
  contact: {
    phoneDisplay: "06 15 28 88 90",
    phoneHref: "+33615288890",
    email: "massagesoleia@gmail.com",
    instagram: "https://www.instagram.com/soleia.massage.alexanne",
    addressName: "Alba Plage",
    addressLine: "140 Quai de Caravello, Quartier Deï, 83600 Fréjus",
    horaires: "Lun – Sam : 9h – 19h",
  },
  tarifs: {
    intro:
      "Massages proposés à Alba Plage, à Fréjus, ou à domicile. Le tarif dépend uniquement de la durée de la séance.",
    items: [
      { duree: "25 min", prix: "65€" },
      { duree: "50 min", prix: "95€" },
    ],
    domicileNote: "Tarifs identiques à domicile",
  },
  hero: {
    tagline:
      "Offrez-vous une parenthèse de douceur pour ralentir, apaiser le corps et le mental, retrouver votre énergie, vous reconnecter.",
  },
  about: {
    paragraphs: [
      "Je m'appelle Alexanne, et le bien-être est au cœur de ma façon d'être.",
      "Je propose des moments de présence, de douceur et d'écoute, entièrement dédié à votre détente.",
      "Je masse intuitivement en étant pleinement présente, à l'écoute du corps et de l'énergie de chaque personne avec un toucher sincère guidé par le cœur.",
      "Mon intention est de vous accompagner à relâcher les tensions, apaiser le mental et vous reconnecter à vous-même, dans un espace de confiance et de lâcher-prise.",
    ],
  },
  services: {
    intro:
      "Un moment pour vous recentrer, relâcher et respirer. Mes massages sont pensés pour vous offrir une détente profonde, physique et mentale.",
    bienfaits: [
      {
        title: "Relâcher les tensions du corps",
        description:
          "Un toucher sincère et attentif qui libère les nœuds musculaires et invite le corps à se détendre pleinement.",
      },
      {
        title: "Apaiser le mental, ralentir",
        description:
          "Une présence douce et bienveillante pour calmer le flot des pensées et retrouver un rythme plus naturel.",
      },
      {
        title: "Se reconnecter à soi, à ses sensations",
        description:
          "En étant pleinement à l'écoute de votre corps et de votre énergie, chaque séance devient un retour à soi.",
      },
      {
        title: "Retrouver calme et équilibre intérieur",
        description:
          "Un espace de confiance et de lâcher-prise pour repartir ressourcé·e, ancré·e et pleinement présent·e.",
      },
    ],
  },
};
