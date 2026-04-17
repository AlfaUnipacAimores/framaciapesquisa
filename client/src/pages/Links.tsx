import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, ExternalLink, Globe, Lightbulb, Users, Zap } from "lucide-react";
import { Link } from "wouter";

export default function Links() {
  const { user } = useAuth();

  const categorias = [
    {
      titulo: "Plataformas Educacionais",
      icone: BookOpen,
      cor: "bg-blue-100",
      corTexto: "text-blue-900",
      links: [
        {
          nome: "Coursera",
          descricao: "Cursos sobre farmacologia e pesquisa de universidades",
          url: "https://www.coursera.org/"
        },
        {
          nome: "edX",
          descricao: "Cursos de universidades sobre ciências da saúde",
          url: "https://www.edx.org/"
        },
        {
          nome: "Khan Academy",
          descricao: "Vídeos educacionais sobre biologia e química",
          url: "https://www.khanacademy.org/"
        },
        {
          nome: "OpenStax",
          descricao: "Livros didáticos gratuitos de ciências",
          url: "https://openstax.org/"
        }
      ]
    },
    {
      titulo: "Ferramentas de Análise e Gerenciamento",
      icone: Zap,
      cor: "bg-green-100",
      corTexto: "text-green-900",
      links: [
        {
          nome: "Mendeley",
          descricao: "Gerenciador de referências e rede social acadêmica",
          url: "https://www.mendeley.com/"
        },
        {
          nome: "Zotero",
          descricao: "Gerenciador de referências de código aberto",
          url: "https://www.zotero.org/"
        },
        {
          nome: "EndNote",
          descricao: "Software para gerenciar referências bibliográficas",
          url: "https://endnote.com/"
        },
        {
          nome: "JabRef",
          descricao: "Gerenciador de referências BibTeX",
          url: "https://www.jabref.org/"
        }
      ]
    },
    {
      titulo: "Repositórios de Preprints",
      icone: Globe,
      cor: "bg-purple-100",
      corTexto: "text-purple-900",
      links: [
        {
          nome: "bioRxiv",
          descricao: "Preprints em biologia e ciências da vida",
          url: "https://www.biorxiv.org/"
        },
        {
          nome: "medRxiv",
          descricao: "Preprints em medicina e ciências de saúde",
          url: "https://www.medrxiv.org/"
        },
        {
          nome: "arXiv",
          descricao: "Preprints em ciências, matemática e computação",
          url: "https://arxiv.org/"
        },
        {
          nome: "SSRN",
          descricao: "Repositório de preprints em ciências sociais",
          url: "https://www.ssrn.com/"
        }
      ]
    },
    {
      titulo: "Redes Sociais Acadêmicas",
      icone: Users,
      cor: "bg-orange-100",
      corTexto: "text-orange-900",
      links: [
        {
          nome: "ResearchGate",
          descricao: "Rede social para pesquisadores compartilharem trabalhos",
          url: "https://www.researchgate.net/"
        },
        {
          nome: "Academia.edu",
          descricao: "Plataforma para compartilhamento de pesquisas",
          url: "https://www.academia.edu/"
        },
        {
          nome: "LinkedIn",
          descricao: "Rede profissional para cientistas e pesquisadores",
          url: "https://www.linkedin.com/"
        },
        {
          nome: "Twitter Científico",
          descricao: "Comunidade de pesquisadores no Twitter",
          url: "https://twitter.com/search?q=%23science"
        }
      ]
    },
    {
      titulo: "Softwares e Ferramentas de Pesquisa",
      icone: Lightbulb,
      cor: "bg-pink-100",
      corTexto: "text-pink-900",
      links: [
        {
          nome: "PyMOL",
          descricao: "Visualização de estruturas proteicas",
          url: "https://pymol.org/"
        },
        {
          nome: "GROMACS",
          descricao: "Software de dinâmica molecular",
          url: "https://www.gromacs.org/"
        },
        {
          nome: "AutoDock",
          descricao: "Software para docking molecular",
          url: "http://autodock.scripps.edu/"
        },
        {
          nome: "ChemDraw",
          descricao: "Desenho de estruturas químicas",
          url: "https://www.chemdoodle.com/"
        }
      ]
    },
    {
      titulo: "Portais de Busca Científica",
      icone: BookOpen,
      cor: "bg-indigo-100",
      corTexto: "text-indigo-900",
      links: [
        {
          nome: "Google Scholar",
          descricao: "Busca de artigos científicos e citações",
          url: "https://scholar.google.com/"
        },
        {
          nome: "Semantic Scholar",
          descricao: "Busca alimentada por IA de artigos científicos",
          url: "https://www.semanticscholar.org/"
        },
        {
          nome: "ScienceDirect",
          descricao: "Plataforma de pesquisa científica da Elsevier",
          url: "https://www.sciencedirect.com/"
        },
        {
          nome: "Springer",
          descricao: "Editora de periódicos científicos",
          url: "https://www.springer.com/"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-3 hover:opacity-80 transition">
              <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div className="text-xl font-bold text-blue-900">
                Farmácia & Pesquisa
              </div>
            </a>
          </Link>
          <div className="flex gap-4">
            <Link href="/">
              <a className="text-gray-700 hover:text-blue-900 transition">
                Voltar
              </a>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Recursos e Links Úteis
          </h1>
          <p className="text-xl text-blue-100">
            Ferramentas, plataformas e portais para pesquisa farmacêutica
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {categorias.map((categoria, idx) => {
          const IconComponent = categoria.icone;
          return (
            <section key={idx} className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className={`${categoria.cor} p-3 rounded-lg`}>
                  <IconComponent className={`w-8 h-8 ${categoria.corTexto}`} />
                </div>
                <h2 className="text-3xl font-bold text-blue-900">
                  {categoria.titulo}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categoria.links.map((link, linkIdx) => (
                  <Card key={linkIdx} className="p-6 hover:shadow-lg transition border border-gray-200">
                    <h3 className="text-lg font-bold text-blue-900 mb-2">
                      {link.nome}
                    </h3>
                    <p className="text-gray-600 mb-4">{link.descricao}</p>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold"
                    >
                      Acessar <ExternalLink className="w-4 h-4" />
                    </a>
                  </Card>
                ))}
              </div>
            </section>
          );
        })}

        {/* Dicas de Pesquisa */}
        <section className="bg-blue-50 rounded-lg p-8 mb-20">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">
            💡 Dicas para Pesquisa Eficiente
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-blue-900 mb-2">Comece com PubMed</h3>
              <p className="text-gray-700">
                Para buscas gerais em literatura biomédica, PubMed é o ponto de partida ideal com 40+ milhões de citações.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-blue-900 mb-2">Use Gerenciadores de Referências</h3>
              <p className="text-gray-700">
                Ferramentas como Mendeley e Zotero ajudam a organizar, anotar e compartilhar seus artigos.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-blue-900 mb-2">Explore Preprints</h3>
              <p className="text-gray-700">
                bioRxiv e medRxiv oferecem acesso rápido a pesquisas recentes antes da publicação formal.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-blue-900 mb-2">Acompanhe Periódicos</h3>
              <p className="text-gray-700">
                Inscreva-se em alertas de periódicos importantes para receber notificações de novos artigos.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-blue-900 mb-2">Conecte-se com Pesquisadores</h3>
              <p className="text-gray-700">
                ResearchGate e Academia.edu permitem encontrar e colaborar com pesquisadores da sua área.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-blue-900 mb-2">Use Softwares Especializados</h3>
              <p className="text-gray-700">
                Para análises computacionais, explore PyMOL, GROMACS e outras ferramentas de modelagem.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para começar sua pesquisa?
          </h2>
          <p className="text-xl text-blue-100 mb-6">
            Explore as bases de dados, leia artigos científicos e colabore com pesquisadores ao redor do mundo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-900 px-8 py-3 rounded font-semibold hover:bg-blue-50 transition"
            >
              Ir para PubMed
            </a>
            <Link href="/referencias">
              <a className="inline-block bg-green-500 text-white px-8 py-3 rounded font-semibold hover:bg-green-600 transition">
                Ver Referências Científicas
              </a>
            </Link>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Farmácia & Pesquisa</h3>
              <p className="text-gray-400">
                Explorando o papel do farmacêutico na pesquisa científica e desenvolvimento de medicamentos.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/"><a className="hover:text-white transition">Início</a></Link></li>
                <li><Link href="/descobertas"><a className="hover:text-white transition">Descobertas</a></Link></li>
                <li><Link href="/referencias"><a className="hover:text-white transition">Referências</a></Link></li>
                <li><Link href="/links"><a className="hover:text-white transition">Links</a></Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contato</h3>
              <p className="text-gray-400">
                📧 contato@unipacaimores.com.br<br/>
                📱 +55 (33) 99989-8904<br/>
                📍 Aimorés, MG, Brasil
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2026 AlfaUnipac Aimorés. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
