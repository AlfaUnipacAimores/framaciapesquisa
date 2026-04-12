import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Beaker, BookOpen, FileText, LogOut, Microscope, Zap } from "lucide-react";
import { getLoginUrl } from "@/const";
import { Link } from "wouter";

/**
 * Design Philosophy: Modernismo Científico com Austeridade Elegante
 * - Tipografia: Playfair Display (títulos) + Lato (corpo)
 * - Paleta: Branco, Cinza Carvão, Azul Marinho, Verde Menta
 * - Layout: Assimétrico com espaçamento generoso
 * - Animações: Transições suaves e reveladoras
 */

export default function Home() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-900">
            Farmácia & Pesquisa
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#evolucao" className="text-gray-700 hover:text-blue-900 transition">
              Evolução
            </a>
            <a href="#farmaceutico" className="text-gray-700 hover:text-blue-900 transition">
              O Farmacêutico
            </a>
            <a href="#pesquisa" className="text-gray-700 hover:text-blue-900 transition">
              Pesquisa
            </a>
            <a href="#impacto" className="text-gray-700 hover:text-blue-900 transition">
              Impacto
            </a>
            <Link href="/recursos" className="text-gray-700 hover:text-blue-900 transition">
              Recursos
            </Link>
            {user ? (
              <div className="flex gap-3 items-center">
                <span className="text-sm text-gray-600">{user.name}</span>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => logout()}
                  className="flex gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  Sair
                </Button>
              </div>
            ) : (
              <Button
                size="sm"
                className="bg-blue-900 text-white hover:bg-blue-800"
                onClick={() => (window.location.href = getLoginUrl())}
              >
                Login
              </Button>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center min-h-screen">
          {/* Texto Hero */}
          <div className="px-6 md:px-12 py-20 md:py-32 flex flex-col justify-center order-2 lg:order-1">
            <div className="max-w-xl">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                O Farmacêutico na Pesquisa Científica
              </h1>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Explorando a evolução tecnológica, o papel vital do profissional farmacêutico e o impacto transformador da Inteligência Artificial no desenvolvimento de medicamentos.
              </p>
              <div className="flex gap-4">
                <Button className="bg-blue-900 text-white hover:bg-blue-800 px-6 py-3">
                  Explorar Pesquisa
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-50">
                  Saiba Mais
                </Button>
              </div>
            </div>
          </div>

          {/* Imagem Hero */}
          <div className="relative h-96 md:h-screen order-1 lg:order-2 overflow-hidden">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663029735165/ZriG5Uod7PW2MsiTuCRe5n/hero-pharmaceutical-research-NMNPsBzgNY2rFtDFytVxHp.webp"
              alt="Pesquisa Farmacêutica"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white opacity-20" />
          </div>
        </div>
      </section>

      {/* Divisor */}
      <div className="h-1 bg-gradient-to-r from-transparent via-blue-900 to-transparent" />

      {/* Seção Contexto Tecnológico */}
      <section id="evolucao" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              A Evolução Tecnológica na Pesquisa Farmacêutica
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              A transição do compartilhamento informal de conhecimento para a era da Inteligência de Dados representa uma mudança paradigmática fundamental na forma como a ciência farmacêutica avança.
            </p>
          </div>

          {/* Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Era 1 */}
            <div className="relative">
              <div className="mb-8">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-gray-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Passado: Compartilhamento Informal
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Plataformas como GeoCities e fóruns especializados permitiam o compartilhamento de conhecimento em comunidades de interesse, com dados dispersos e baixa indexação.
                </p>
              </div>
              <div className="absolute bottom-0 left-6 w-1 h-12 bg-gradient-to-b from-gray-300 to-transparent hidden md:block" />
            </div>

            {/* Era 2 */}
            <div className="relative">
              <div className="mb-8">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mb-4">
                  <Microscope className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Presente: Indexação Estruturada
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Repositórios científicos como MDPI oferecem indexação rigorosa, acesso aberto, interconectividade global e curadoria de dados de alta qualidade.
                </p>
              </div>
              <div className="absolute bottom-0 left-6 w-1 h-12 bg-gradient-to-b from-blue-900 to-transparent hidden md:block" />
            </div>

            {/* Era 3 */}
            <div className="relative">
              <div className="mb-8">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Futuro: Inteligência Artificial
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  IA processa dados em larga escala, prediz moléculas, automatiza triagens e oferece suporte à decisão clínica, revolucionando o desenvolvimento de medicamentos.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline Image */}
          <div className="mt-16 rounded-lg overflow-hidden border border-gray-200">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663029735165/ZriG5Uod7PW2MsiTuCRe5n/timeline-molecular-evolution-E56fBwZBDRi8VnP3aShu6Y.webp"
              alt="Evolução Tecnológica"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Divisor */}
      <div className="h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />

      {/* Seção O Farmacêutico */}
      <section id="farmaceutico" className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Imagem */}
            <div className="rounded-lg overflow-hidden border border-gray-200 order-2 lg:order-1">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663029735165/ZriG5Uod7PW2MsiTuCRe5n/pharmacist-research-lab-Ndqbjce4gp7FRn8CibKgAq.webp"
                alt="Farmacêutico em Laboratório"
                className="w-full h-auto"
              />
            </div>

            {/* Conteúdo */}
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                O Papel do Farmacêutico
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                O farmacêutico é um agente central na pesquisa científica, atuando em múltiplas frentes: desde a descoberta de novas moléculas até os ensaios clínicos e vigilância sanitária.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-1 bg-blue-900 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Pesquisa e Desenvolvimento</h3>
                    <p className="text-gray-700">
                      Participação ativa na síntese de moléculas, testes de eficácia e otimização de fármacos.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-1 bg-blue-900 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Ensaios Clínicos</h3>
                    <p className="text-gray-700">
                      Supervisão de protocolos, análise de dados e garantia de conformidade regulatória.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-1 bg-blue-900 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Inovação Tecnológica</h3>
                    <p className="text-gray-700">
                      Adoção de bioinformática, modelagem molecular e IA para acelerar descobertas.
                    </p>
                  </div>
                </div>
              </div>

              <Button className="mt-8 bg-blue-900 text-white hover:bg-blue-800 px-6 py-3">
                Conheça Mais Sobre a Profissão
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Divisor */}
      <div className="h-1 bg-gradient-to-r from-transparent via-blue-900 to-transparent" />

      {/* Seção Eixos de Pesquisa */}
      <section id="pesquisa" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Eixos Temáticos de Pesquisa
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Compreender a pesquisa farmacêutica exige explorar múltiplas dimensões do desenvolvimento de medicamentos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <Card className="p-8 border border-gray-200 hover:shadow-lg transition">
              <Beaker className="w-8 h-8 text-blue-900 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Ciclo de Vida do Medicamento
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Desde a concepção da molécula até os ensaios clínicos, pós-comercialização e vigilância sanitária.
              </p>
            </Card>

            {/* Card 2 */}
            <Card className="p-8 border border-gray-200 hover:shadow-lg transition">
              <Microscope className="w-8 h-8 text-blue-900 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Ensaios Clínicos
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Exploração das diferentes fases dos ensaios clínicos e o papel crítico do farmacêutico em cada etapa.
              </p>
            </Card>

            {/* Card 3 */}
            <Card className="p-8 border border-gray-200 hover:shadow-lg transition">
              <Zap className="w-8 h-8 text-emerald-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Impacto Social
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Como a pesquisa farmacêutica salva vidas, promove bem-estar coletivo e transforma a saúde pública.
              </p>
            </Card>

            {/* Card 4 */}
            <Card className="p-8 border border-gray-200 hover:shadow-lg transition">
              <Zap className="w-8 h-8 text-emerald-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Inovação e IA
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Uso de algoritmos para acelerar descoberta de fármacos, reduzir custos e melhorar eficácia.
              </p>
            </Card>
          </div>

          {/* Research Data Image */}
          <div className="mt-16 rounded-lg overflow-hidden border border-gray-200">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663029735165/ZriG5Uod7PW2MsiTuCRe5n/clinical-trials-data-9uLnKvK4SYRsZW6z3r9wx6.webp"
              alt="Dados de Pesquisa Clínica"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Divisor */}
      <div className="h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />

      {/* Seção Inovação e Breakthrough */}
      <section id="impacto" className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Conteúdo */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Inovação e Descobertas
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                A pesquisa farmacêutica não é apenas uma disciplina científica—é uma missão humanitária que transforma vidas através da inovação contínua.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Exemplos de Descobertas Importantes
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    De antibióticos revolucionários a terapias genéticas de ponta, o trabalho do farmacêutico tem moldado a história da medicina moderna.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Ferramentas Atuais
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Bioinformática, modelagem molecular, big data e IA permitem que os pesquisadores trabalhem com velocidade e precisão sem precedentes.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    O Futuro da Farmácia
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Medicamentos personalizados, terapias regenerativas e tratamentos preventivos baseados em IA estão redefinindo o que é possível.
                  </p>
                </div>
              </div>

              <Button className="mt-8 bg-emerald-500 text-white hover:bg-emerald-600 px-6 py-3">
                Descubra Mais Inovações
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Imagem */}
            <div className="rounded-lg overflow-hidden border border-gray-200">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663029735165/ZriG5Uod7PW2MsiTuCRe5n/innovation-breakthrough-AVuoQptWtyL8qwXf2RRpDL.webp"
                alt="Inovação e Descoberta"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Divisor */}
      <div className="h-1 bg-gradient-to-r from-transparent via-blue-900 to-transparent" />

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Junte-se à Comunidade Científica
          </h2>
          <p className="text-lg text-blue-100 mb-8 leading-relaxed">
            Descubra como o curso de Farmácia da Faculdade AlfaUnipac prepara profissionais para liderar a inovação em pesquisa farmacêutica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 font-semibold">
              Saiba Mais Sobre o Curso
            </Button>
            <Link href="/recursos">
              <Button variant="outline" className="border-white text-white hover:bg-blue-800 px-8 py-3 font-semibold w-full">
                <FileText className="mr-2 w-4 h-4" />
                Acessar Recursos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">Sobre</h3>
              <p className="text-sm leading-relaxed">
                Memorial descritivo sobre o papel do farmacêutico na pesquisa científica e desenvolvimento de medicamentos.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Navegação</h3>
              <ul className="text-sm space-y-2">
                <li><a href="#evolucao" className="hover:text-white transition">Evolução Tecnológica</a></li>
                <li><a href="#farmaceutico" className="hover:text-white transition">O Farmacêutico</a></li>
                <li><a href="#pesquisa" className="hover:text-white transition">Pesquisa</a></li>
                <li><a href="#impacto" className="hover:text-white transition">Impacto</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Instituição</h3>
              <p className="text-sm">
                Faculdade AlfaUnipac<br />
                Curso de Farmácia<br />
                Aimorés, MG
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p>&copy; 2026 O Farmacêutico na Pesquisa Científica. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
