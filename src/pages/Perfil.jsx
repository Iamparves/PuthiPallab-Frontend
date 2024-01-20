// Perfil.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { Outlet } from "react-router-dom";
import PerfilSidebar from '../components/PerfilSidebar';
import { db } from "../utils/firebaseSetup"
import useAuth from "../hooks/useAuth";
import DadosInscricaoEncibaf from '../components/DadosInscricaoEcibaf';

const Perfil = () => {
  const navigate = useNavigate(); // Utilize o useNavigate para navegação
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user } = useAuth()
  const [docSnap, setDocSnap] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!user) {
          // Redireciona para a página de login se o usuário não estiver autenticado
          navigate('/login');
          return;
        }

        const docRef = doc(db, "TesteForm", user.email);
        const fetchedDocSnap  = await getDoc(docRef);
        
        if (fetchedDocSnap .exists()) {
          setDocSnap(fetchedDocSnap);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      } catch (error) {
        console.error('Erro ao obter dados do Firestore:', error);
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <main className="grid grid-cols-1 lg:grid-cols-[280px_1fr] mt-10">
      <PerfilSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <div className="h-full w-full mb-10 pr-10 pl-2 max-w-[1900px]">
        {/* Renderize o DadosInscricaoEncibaf e passe o docSnap como propriedade */}
        <DadosInscricaoEncibaf docSnap={docSnap} />

        {/* Adicione outros elementos conforme necessário */}
        {/* <button onClick={() => navigate('/inscricao')}>Inscrição ENCIBAF</button> */}
        {/* <button onClick={handleLogout}>Logout</button> */}
        {/* <Outlet context={[sidebarOpen, setSidebarOpen]} /> */}
      </div>
  </main>
  );
};

export default Perfil;
