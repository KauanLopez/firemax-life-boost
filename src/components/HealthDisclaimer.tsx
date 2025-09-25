import React from 'react';
import { Card } from '@/components/ui/card';

const HealthDisclaimer = () => {
  return (
    <section className="py-8 bg-muted/20">
      <div className="container mx-auto px-4">
        <Card className="p-6 bg-card border-border">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-lg font-bold mb-4 text-foreground">
              📋 Informações Importantes
            </h3>
            
            <div className="text-sm text-muted-foreground leading-relaxed space-y-3">
              <p>
                <strong>Sobre o produto:</strong> Este produto é um suplemento alimentar natural. 
                Os resultados podem variar de pessoa para pessoa e não são garantidos.
              </p>
              
              <p>
                <strong>Consulta médica:</strong> Consulte sempre um médico ou profissional de saúde 
                qualificado antes de iniciar qualquer suplementação, especialmente se você possui 
                condições médicas pré-existentes ou toma medicamentos.
              </p>
              
              <p>
                <strong>Não é medicamento:</strong> Este produto não se destina a diagnosticar, 
                tratar, curar ou prevenir qualquer doença. Não deve ser usado como substituto 
                de uma dieta equilibrada e estilo de vida saudável.
              </p>
              
              <p>
                <strong>Uso responsável:</strong> Siga sempre as instruções de uso do produto. 
                Mantenha fora do alcance de crianças. Não exceda a dose recomendada.
              </p>
              
              <p className="text-xs pt-4 border-t border-border">
                FireMax é um suplemento alimentar fabricado seguindo as boas práticas de fabricação. 
                Registro ANVISA: (número fictício para exemplo) 123.456.789/0001-10
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default HealthDisclaimer;