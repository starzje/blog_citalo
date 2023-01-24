import Link from 'next/link';
import React, { FC } from 'react';

interface LinkButtonsProps {
  link: string;
  label: string;
  openInNewTab?: boolean;
}

const LinkButtons: FC<LinkButtonsProps> = ({
  link,
  label,
  openInNewTab = false,
}) => {
  return (
    <Link
      href={link}
      target={openInNewTab ? '_blank' : ''}
      className="bg-[#57453d] hover:bg-[#776258] font-bold text-white rounded-2xl flex-1 inline-block py-2 "
      aria-label={`idi na ${label}`}
    >
      {label}
    </Link>
  );
};

export default LinkButtons;
