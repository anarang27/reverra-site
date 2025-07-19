const StarBorder = ({
  as: Component = "button",
  className = "",
  color = "green",
  speed = "6s",
  thickness = 10,
  children,
  ...rest
}) => {
  return (
    <Component
      className={`relative inline-block overflow-hidden rounded-[12px] ${className}`}
      style={{ padding: `${thickness}px 0`, ...rest.style }}
      {...rest}
    >
      {/* Bottom animation */}
      <div
        className="absolute w-[200%] h-[2px] opacity-80 bottom-0 right-[-100%] animate-star-movement-bottom z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 60%)`,
          animationDuration: speed,
        }}
      />

      {/* Top animation */}
      <div
        className="absolute w-[200%] h-[2px] opacity-80 top-0 left-[-100%] animate-star-movement-top z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 60%)`,
          animationDuration: speed,
        }}
      />
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;