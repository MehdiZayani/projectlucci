import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";

export default function nav() {
	const titleweb = "Lucci Design";
	return (
		<div className="Navbara">
			<nav>
				<Link href="../homepage/homepage">
					<a>
						<h1>{titleweb}</h1>
					</a>
				</Link>

				{/* salla7a kif magadithe ena lfou9 !! */}

				<div>
					<Link href="/">
						<p>Cuisine</p>
					</Link>
					<Link href="/">
						<p>Rangement</p>
					</Link>
					<Link href="/">
						<p>Chaises</p>
					</Link>
					<Link href="/">
						<p>Tables</p>
					</Link>
					<Link href="/salon">
						<p>Salon</p>
					</Link>
					<Link href="/">
						<p>Décoration</p>
					</Link>
					<Link href="/">
						<p>Autres</p>
					</Link>
					<Link href="/">
						<p>Notre vision</p>
					</Link>
					<form>
						<input type="search" placeholder="Rechercher" />
					</form>
					<Link href="../index">
						<FontAwesomeIcon icon={faUserCircle} />
					</Link>
					<Link href="../index">
						<FontAwesomeIcon icon={faShoppingCart} />
					</Link>
				</div>
			</nav>
		</div>
	);
}
