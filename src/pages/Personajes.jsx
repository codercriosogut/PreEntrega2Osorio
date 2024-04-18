import UseCarContaine from "../UseCarContaine"

function Personajes() {
    return (
        <div>
            <p className='mb-4 text-2xl font-bold'>-PERSONAJES-</p>
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 users">
                <UseCarContaine />
            </section>
        </div>
    )
}

export default Personajes