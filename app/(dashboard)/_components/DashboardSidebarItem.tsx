import { DynamicDashboardIcon } from "@/components/icons/Icon";
import Link from "next/link";

const DashboardSidebarItem = ({
  href,
  icon,
  label,
  pathname,
}: {
  href: string;
  icon: string;
  label: string;
  pathname: string;
}) => {
  const isActive = pathname === href;
  return (
    <Link
      key={href}
      href={href}
      className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200
                      ${
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"
                      }`}
    >
      <DynamicDashboardIcon icon={icon} />
      {label}
    </Link>
  );
};

export default DashboardSidebarItem;
