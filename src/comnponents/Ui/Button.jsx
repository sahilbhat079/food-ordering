export default function Button({children,textOnly,className,...props}) {
    let cssClassNAme=textOnly? 'text-button ' :'button';
    cssClassNAme+=" " + className;
  return (

    <button className={cssClassNAme} {...props}>
      {children}
    </button>
  )
}
