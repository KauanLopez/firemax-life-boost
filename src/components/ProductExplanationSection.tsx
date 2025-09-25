import React from 'react';
import { Card } from '@/components/ui/card';
import productImage from '@/assets/firemax-product.jpg';

const ProductExplanationSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-section-title mb-6 text-gold">
            FireMax: Dois Formatos, Máxima Potência
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha o formato que melhor se adapta ao seu estilo de vida
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <div className="text-center">
            <img 
              src={productImage} 
              alt="FireMax Cápsulas e Gotas" 
              className="max-w-md w-full h-auto mx-auto rounded-xl premium-shadow pulse-fire"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Capsules */}
            <Card className="p-6 bg-card border-fire-orange/20">
              <div className="flex items-start gap-4">
                <div className="text-4xl">💊</div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-fire-gold">
                    FireMax Cápsulas
                  </h3>
                  <p className="text-foreground mb-4">
                    <strong>Como usar:</strong> Tome 2 cápsulas pela manhã, 30 minutos antes do café da manhã, com um copo de água.
                  </p>
                  <div className="bg-fire-orange/10 p-3 rounded-lg">
                    <p className="text-sm text-foreground">
                      <strong>💡 Dica:</strong> Para melhores resultados, tome sempre no mesmo horário todos os dias.
                    </p>
                  </div>
                </div>
              </div>
            </Card>


            {/* Usage tips */}
            <div className="bg-fire-red/10 p-6 rounded-lg border-2 border-fire-red/20">
              <h4 className="text-lg font-bold mb-3 text-fire-red">
                🎯 Para Resultados Máximos
              </h4>
              <ul className="space-y-2 text-foreground">
                <li>✅ Use consistentemente por no mínimo 30 dias</li>
                <li>✅ Mantenha uma alimentação balanceada</li>
                <li>✅ Beba pelo menos 2 litros de água por dia</li>
                <li>✅ Evite álcool em excesso durante o tratamento</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductExplanationSection;