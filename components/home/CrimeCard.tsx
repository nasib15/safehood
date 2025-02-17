import Image from "next/image";
import Link from "next/link";
import { DownIcon, MapIcon, UpIcon } from "../icons/Icon";

const CrimeCard = () => {
  return (
    <Link
      href={`/crime/1`}
      className="group block bg-card border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-200"
    >
      <div className="aspect-w-16 aspect-h-9 bg-muted">
        <Image
          src="https://plus.unsplash.com/premium_photo-1673543757560-061f5222201c?q=80&w=2940&auto=format&fit=crop"
          alt="Crime report"
          className="object-cover transition-transform group-hover:scale-105"
          width={409}
          height={272}
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground">Score: 0</span>
          <span className="text-sm text-muted-foreground">12/12/2021</span>
        </div>
        <h3 className="text-lg font-medium text-foreground mb-2 line-clamp-1 group-hover:text-primary transition-colors">
          A crime report
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          There was a crime in the area of the report.
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapIcon />
            <span>Dhaka, Bangladesh</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-green-600 transition-colors">
              <UpIcon />
              <span>00</span>
            </button>
            <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-destructive transition-colors">
              <DownIcon />
              <span>00</span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default CrimeCard;
