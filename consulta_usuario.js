
function obtenerUsuarioDB(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 1) {
                resolve({ id: 1, nombre: "Ana", puntos: 100 });
            } else {
                reject(new Error("Usuario no encontrado"));
            }
        }, 500);
    });
}


async function actualizarPuntosUsuario(idUsuario, puntosExtra) {
    try {
        
        const usuario = await obtenerUsuarioDB(idUsuario);
        
        usuario.puntos += puntosExtra;
        console.log(`Puntos actualizados para ${usuario.nombre}: ${usuario.puntos}`);
        return usuario;
    } catch (error) {
        console.error("Error al procesar:", error.message);
    }
}


actualizarPuntosUsuario(1, 50);

