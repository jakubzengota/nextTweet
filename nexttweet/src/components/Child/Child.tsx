
interface ChildProps {
    children: React.ReactNode;
    className?: string;
}
const Child = ({children, className = ""}: ChildProps) => {
    return (
        <section className={`child ${className}`}>
            {children}
        </section>
    )
}
export default Child;