import { Link } from 'react-router-dom';
import { Folder, MessageSquare, Shield, Users, ArrowUpRight } from 'lucide-react';

const icons = {
  folder: Folder,
  message: MessageSquare,
  shield: Shield,
  users: Users,
};

export default function SectionButton({ label, icon, color, to }) {
  const Icon = icons[icon];
  const disabled = !to;

  const content = (
    <>
      <Icon size={30} strokeWidth={2} aria-hidden="true" />
      <span className="section-button__label">{label}</span>
      {disabled ? (
        <span className="section-button__soon">pronto</span>
      ) : (
        <ArrowUpRight className="section-button__corner" size={18} aria-hidden="true" />
      )}
    </>
  );

  const className = `section-button section-button--${color} pressable`;

  if (disabled) {
    return (
      <div className={className} aria-disabled="true">
        {content}
      </div>
    );
  }

  return (
    <Link className={className} to={to} aria-label={`Abrir ${label}`}>
      {content}
    </Link>
  );
}
