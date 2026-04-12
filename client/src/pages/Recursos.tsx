import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { trpc } from "@/lib/trpc";
import { Download, FileText, Trash2, Upload, Lock, AlertCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Link } from "wouter";
import { getLoginUrl } from "@/const";

export default function Recursos() {
  const { user } = useAuth();
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<"research" | "teaching" | "clinical_trials" | "other">("research");

  // Queries
  const userFilesQuery = trpc.files.listUserFiles.useQuery(undefined, {
    enabled: !!user,
  });
  const publicFilesQuery = trpc.files.listPublic.useQuery();

  // Mutations
  const uploadMutation = trpc.files.upload.useMutation({
    onSuccess: () => {
      toast.success("Arquivo enviado com sucesso!");
      setSelectedFile(null);
      setDescription("");
      setCategory("research");
      userFilesQuery.refetch();
    },
    onError: (error) => {
      toast.error(`Erro ao enviar arquivo: ${error.message}`);
    },
  });

  const deleteMutation = trpc.files.delete.useMutation({
    onSuccess: () => {
      toast.success("Arquivo deletado com sucesso!");
      userFilesQuery.refetch();
    },
    onError: (error) => {
      toast.error(`Erro ao deletar arquivo: ${error.message}`);
    },
  });

  const handleUpload = async () => {
    if (!selectedFile) {
      toast.error("Selecione um arquivo");
      return;
    }

    setUploading(true);
    const buffer = await selectedFile.arrayBuffer();
    uploadMutation.mutate({
      fileName: selectedFile.name,
      fileData: Buffer.from(buffer),
      mimeType: selectedFile.type,
      description,
      category,
    });
    setUploading(false);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-900 hover:text-blue-800">
            Farmácia & Pesquisa
          </Link>
          <div className="flex gap-4">
            <Link href="/" className="text-gray-700 hover:text-blue-900 transition">
              Voltar
            </Link>
            {user && (
              <span className="text-sm text-gray-600">{user.name}</span>
            )}
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Recursos de Pesquisa
        </h1>
        <p className="text-lg text-gray-700 mb-12 leading-relaxed">
          Acesse e compartilhe materiais didáticos, pesquisas e documentos sobre farmácia e desenvolvimento de medicamentos.
        </p>

        {user ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Upload Section */}
            <div className="lg:col-span-1">
              <Card className="p-6 border border-gray-200 sticky top-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Enviar Arquivo</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Arquivo
                    </label>
                    <input
                      type="file"
                      onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                      disabled={uploading}
                    />
                    {selectedFile && (
                      <p className="text-xs text-gray-500 mt-1">
                        {selectedFile.name} ({formatFileSize(selectedFile.size)})
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Descrição
                    </label>
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Descreva o arquivo..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                      rows={3}
                      disabled={uploading}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Categoria
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value as any)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                      disabled={uploading}
                    >
                      <option value="research">Pesquisa</option>
                      <option value="teaching">Material Didático</option>
                      <option value="clinical_trials">Ensaios Clínicos</option>
                      <option value="other">Outro</option>
                    </select>
                  </div>

                  <Button
                    onClick={handleUpload}
                    disabled={!selectedFile || uploading}
                    className="w-full bg-blue-900 text-white hover:bg-blue-800"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    {uploading ? "Enviando..." : "Enviar"}
                  </Button>
                </div>
              </Card>
            </div>

            {/* Files List */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Meus Arquivos</h2>
              
              {userFilesQuery.isLoading ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">Carregando arquivos...</p>
                </div>
              ) : userFilesQuery.data && userFilesQuery.data.length > 0 ? (
                <div className="space-y-4">
                  {userFilesQuery.data.map((file) => (
                    <Card key={file.id} className="p-4 border border-gray-200 hover:shadow-lg transition">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <FileText className="w-5 h-5 text-blue-900" />
                            <h3 className="font-semibold text-gray-900">{file.fileName}</h3>
                          </div>
                          {file.description && (
                            <p className="text-sm text-gray-600 mb-2">{file.description}</p>
                          )}
                          <div className="flex gap-4 text-xs text-gray-500">
                            <span>{formatFileSize(file.fileSize)}</span>
                            <span>{formatDate(file.uploadedAt)}</span>
                            <span className="bg-blue-100 text-blue-900 px-2 py-1 rounded">
                              {file.category}
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-2 ml-4">
                          <a href={file.fileUrl} target="_blank" rel="noopener noreferrer">
                            <Button size="sm" variant="outline">
                              <Download className="w-4 h-4" />
                            </Button>
                          </a>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => deleteMutation.mutate({ fileId: file.id })}
                            disabled={deleteMutation.isPending}
                          >
                            <Trash2 className="w-4 h-4 text-red-600" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 bg-gray-50 rounded-lg">
                  <FileText className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-500">Você ainda não enviou nenhum arquivo</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <Card className="p-8 border border-yellow-200 bg-yellow-50">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-yellow-900 mb-2">Acesso Restrito</h3>
                <p className="text-yellow-800 mb-4">
                  Para enviar e gerenciar arquivos de pesquisa, você precisa fazer login.
                </p>
                <Button
                  onClick={() => (window.location.href = getLoginUrl())}
                  className="bg-yellow-600 text-white hover:bg-yellow-700"
                >
                  <Lock className="w-4 h-4 mr-2" />
                  Fazer Login
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* Public Files Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Recursos Públicos</h2>
          
          {publicFilesQuery.isLoading ? (
            <div className="text-center py-8">
              <p className="text-gray-500">Carregando recursos...</p>
            </div>
          ) : publicFilesQuery.data && publicFilesQuery.data.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {publicFilesQuery.data.map((file) => (
                <Card key={file.id} className="p-6 border border-gray-200 hover:shadow-lg transition">
                  <div className="flex items-start gap-4 mb-4">
                    <FileText className="w-8 h-8 text-blue-900 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{file.fileName}</h3>
                      <p className="text-xs text-gray-500">
                        Por {file.userId} • {formatDate(file.uploadedAt)}
                      </p>
                    </div>
                  </div>
                  
                  {file.description && (
                    <p className="text-sm text-gray-600 mb-4">{file.description}</p>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <div className="flex gap-3 text-xs text-gray-500">
                      <span>{formatFileSize(file.fileSize)}</span>
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {file.category}
                      </span>
                    </div>
                    <a href={file.fileUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="bg-blue-900 text-white hover:bg-blue-800">
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </Button>
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 bg-gray-50 rounded-lg">
              <FileText className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">Nenhum recurso público disponível ainda</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
