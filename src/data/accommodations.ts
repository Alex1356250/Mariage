import { Accommodation } from "../types";

export const accommodations: Accommodation[] = [
	{
		name: "Le Château des Roses",
		address: "1 Route du Château, 75000 Paris",
		phone: "+33 1 23 45 67 89",
		email: "contact@chateaudesroses.fr",
		website: "https://chateaudesroses.fr",
		description:
			"Hébergement principal du mariage avec des chambres élégantes et tout confort.",
		distance: "Sur place",
		image:
			"https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
	},
	{
		name: "Hôtel Le Magnifique",
		address: "15 Rue des Fleurs, 75000 Paris",
		phone: "+33 1 98 76 54 32",
		email: "contact@lemagnifique.fr",
		website: "https://lemagnifique.fr",
		description: "Hôtel 4 étoiles à proximité du lieu de réception.",
		distance: "2 km",
		image:
			"https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
	},
];
