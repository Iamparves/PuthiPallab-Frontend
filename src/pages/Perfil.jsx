// Perfil.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { Outlet } from "react-router-dom";
import PerfilSidebar from '../components/PerfilSidebar';

const Perfil = () => {
  const navigate = useNavigate(); // Utilize o useNavigate para navegação
  const [userData, setUserData] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    // Verifica se o usuário está autenticado
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Obtém dados do usuário a partir do Firestore
        const db = getFirestore();
        const userRef = doc(db, 'TesteForm', user.email);

        try {
          const docSnapshot = await getDoc(userRef);
          if (docSnapshot.exists()) {
            setUserData(docSnapshot.data());
          } else {
            console.log('Documento não encontrado!');
          }
        } catch (error) {
          console.error('Erro ao obter dados do Firestore:', error);
        }
      } else {
        // Redireciona para a página de login se o usuário não estiver autenticado
        navigate('/login'); // Utilize o navigate para navegar
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await auth.signOut();
      navigate('/login'); // Utilize o navigate para navegar
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  return (
    <main className="grid h-screen grid-cols-1 bg-[#F6F7FB] lg:grid-cols-[280px_1fr]">
      <PerfilSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
    <button onClick={() => navigate('/inscricao')}>Inscrição ENCIBAF</button>
    <button onClick={handleLogout}>Logout</button>
      <div className="h-full w-full overflow-hidden">
        <Outlet context={[sidebarOpen, setSidebarOpen]} />
      </div>
    </main>
  );
};

export default Perfil;
