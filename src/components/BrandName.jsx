const BrandName = ({ size = 'md', showTagline = false, className = '' }) => {
  const sizes = {
    sm: 'text-lg',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl',
  };

  return (
    <div className={className}>
      <span className={`font-bold tracking-tight text-gradient-brand ${sizes[size]}`}>
        Learnspire AI
      </span>
      {showTagline && (
        <p className="text-zinc-500 text-xs sm:text-sm mt-1.5 font-medium tracking-wide">
          Learn. Inspire. Grow.
        </p>
      )}
    </div>
  );
};

export default BrandName;
