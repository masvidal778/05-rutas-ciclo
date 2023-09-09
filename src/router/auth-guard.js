

const isAuthenticatedGuard = ( async (to, from, next ) => {

    return new Promise( () => {

        const random = Math.random() * 100

        if(random > 50) {
            console.log('Està autenticat')
            next()
        }else{
            console.log('Bloquejat per isAuthenticatedGuard', random)
            next({ name: 'pokemon-home' })
        }

    })

})

export default isAuthenticatedGuard