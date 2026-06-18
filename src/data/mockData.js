// Base mockada que substitui uma API durante a demonstração do projeto.
const todasUnidades = ['copacabana', 'recreio', 'madureira', 'niteroi', 'buzios', 'paraty'];

const produtosGerais = [
  'tapioca_queijo',
  'tapioca_carne_seca',
  'tapioca_coco',
  'tapioca_banana',
  'cuscuz_recheado',
  'cuscuz_doce',
  'cuscuz_carne_seca',
  'bolo_macaxeira',
  'bolo_milho',
  'bolo_rolo',
  'bolo_coco',
  'suco_caju',
  'suco_mangaba',
  'cafe_nordestino',
  'agua_coco',
  'mate_limao',
  'combo_tapioca_suco',
  'combo_cuscuz_cafe',
  'combo_bolo_cafe',
  'combo_familia'
];

// Cada unidade define seu endereço e quais produtos aparecem no cardápio filtrado.
export const unidades = [
  {
    id: 'copacabana',
    nome: 'Raízes do Nordeste - Copacabana',
    cidade: 'Copacabana',
    endereco: 'Av. Nossa Senhora de Copacabana, 680',
    produtosDisponiveis: [...produtosGerais, 'combo_turistico_carioca']
  },
  {
    id: 'recreio',
    nome: 'Raízes do Nordeste - Recreio dos Bandeirantes',
    cidade: 'Recreio dos Bandeirantes',
    endereco: 'Av. das Américas, 15000',
    produtosDisponiveis: produtosGerais
  },
  {
    id: 'madureira',
    nome: 'Raízes do Nordeste - Madureira',
    cidade: 'Madureira',
    endereco: 'Estrada do Portela, 222',
    produtosDisponiveis: [...produtosGerais, 'cuscuz_especial_casa']
  },
  {
    id: 'niteroi',
    nome: 'Raízes do Nordeste - Niterói',
    cidade: 'Niterói',
    endereco: 'Rua Moreira César, 180',
    produtosDisponiveis: produtosGerais
  },
  {
    id: 'buzios',
    nome: 'Raízes do Nordeste - Búzios',
    cidade: 'Búzios',
    endereco: 'Rua das Pedras, 95',
    produtosDisponiveis: [...produtosGerais, 'tapioca_camarao']
  },
  {
    id: 'paraty',
    nome: 'Raízes do Nordeste - Paraty',
    cidade: 'Paraty',
    endereco: 'Rua do Comércio, 42',
    produtosDisponiveis: [...produtosGerais, 'cafe_colonial_nordestino']
  }
];

// Produtos compartilhados pelas páginas de cardápio, carrinho e relatórios simulados.
export const produtos = [
  {
    id: 'tapioca_queijo',
    nome: 'Tapioca de Queijo Coalho',
    categoria: 'Tapiocas',
    preco: 19.9,
    descricao: 'Tapioca recheada com queijo coalho derretido e tempero nordestino.',
    imagem: '/images/tapioca_queijo.jpg',
    periodoEspecial: false,
    unidadesDisponiveis: todasUnidades
  },
  {
    id: 'tapioca_carne_seca',
    nome: 'Tapioca de Carne Seca',
    categoria: 'Tapiocas',
    preco: 24.9,
    descricao: 'Tapioca com carne seca desfiada, cebola roxa e queijo coalho.',
    imagem: '/images/tapioca_carne_seca.jpg',
    periodoEspecial: false,
    unidadesDisponiveis: todasUnidades
  },
  {
    id: 'tapioca_coco',
    nome: 'Tapioca de Coco com Leite Condensado',
    categoria: 'Tapiocas',
    preco: 17.5,
    descricao: 'Tapioca doce com coco ralado e leite condensado.',
    imagem: '/images/tapioca_coco.jpg',
    periodoEspecial: false,
    unidadesDisponiveis: todasUnidades
  },
  {
    id: 'tapioca_banana',
    nome: 'Tapioca de Banana com Canela',
    categoria: 'Tapiocas',
    preco: 18,
    descricao: 'Tapioca com banana-da-terra caramelizada e canela.',
    imagem: '/images/tapioca_banana.jpg',
    periodoEspecial: false,
    unidadesDisponiveis: todasUnidades
  },
  {
    id: 'tapioca_camarao',
    nome: 'Tapioca de Camarão',
    categoria: 'Tapiocas',
    preco: 32.9,
    descricao: 'Tapioca exclusiva de Búzios com camarão temperado e creme de queijo.',
    imagem: '/images/tapioca_camarao.jpg',
    periodoEspecial: false,
    unidadesDisponiveis: ['buzios']
  },
  {
    id: 'cuscuz_recheado',
    nome: 'Cuscuz Recheado com Queijo',
    categoria: 'Cuscuz',
    preco: 18.9,
    descricao: 'Cuscuz de milho recheado com queijo coalho e manteiga da terra.',
    imagem: '/images/cuscuz_recheado.jpg',
    periodoEspecial: false,
    unidadesDisponiveis: todasUnidades
  },
  {
    id: 'cuscuz_doce',
    nome: 'Cuscuz Nordestino Doce',
    categoria: 'Cuscuz',
    preco: 15.9,
    descricao: 'Cuscuz doce preparado com coco e leite condensado.',
    imagem: '/images/cuscuz_doce.jpg',
    periodoEspecial: false,
    unidadesDisponiveis: todasUnidades
  },
  {
    id: 'cuscuz_carne_seca',
    nome: 'Cuscuz com Carne Seca',
    categoria: 'Cuscuz',
    preco: 25.9,
    descricao: 'Cuscuz com carne seca acebolada e queijo coalho.',
    imagem: '/images/cuscuz_carne_seca.jpg',
    periodoEspecial: false,
    unidadesDisponiveis: todasUnidades
  },
  {
    id: 'cuscuz_especial_casa',
    nome: 'Cuscuz Especial da Casa',
    categoria: 'Cuscuz',
    preco: 28.9,
    descricao: 'Especialidade de Madureira com carne seca, queijo coalho e vinagrete.',
    imagem: '/images/cuscuz_especial_casa.jpg',
    periodoEspecial: false,
    unidadesDisponiveis: ['madureira']
  },
  {
    id: 'bolo_macaxeira',
    nome: 'Bolo de Macaxeira',
    categoria: 'Bolos',
    preco: 14.5,
    descricao: 'Bolo de macaxeira macio com coco e erva-doce.',
    imagem: '/images/bolo_macaxeira.jpg',
    periodoEspecial: false,
    unidadesDisponiveis: todasUnidades
  },
  {
    id: 'bolo_milho',
    nome: 'Bolo de Milho',
    categoria: 'Bolos',
    preco: 13.9,
    descricao: 'Fatia de bolo de milho cremoso feito artesanalmente.',
    imagem: '/images/bolo_milho.jpg',
    periodoEspecial: false,
    unidadesDisponiveis: todasUnidades
  },
  {
    id: 'bolo_rolo',
    nome: 'Bolo de Rolo',
    categoria: 'Bolos',
    preco: 16.9,
    descricao: 'Tradicional bolo de rolo com recheio de goiabada.',
    imagem: '/images/bolo_rolo.jpg',
    periodoEspecial: false,
    unidadesDisponiveis: todasUnidades
  },
  {
    id: 'bolo_coco',
    nome: 'Bolo Gelado de Coco',
    categoria: 'Bolos',
    preco: 15.5,
    descricao: 'Bolo gelado de coco servido em porção individual.',
    imagem: '/images/bolo_coco.jpg',
    periodoEspecial: false,
    unidadesDisponiveis: todasUnidades
  },
  {
    id: 'suco_caju',
    nome: 'Suco de Caju',
    categoria: 'Bebidas',
    preco: 11,
    descricao: 'Suco natural de caju preparado na hora.',
    imagem: '/images/suco_caju.jpg',
    periodoEspecial: false,
    unidadesDisponiveis: todasUnidades
  },
  {
    id: 'suco_mangaba',
    nome: 'Suco de Mangaba',
    categoria: 'Bebidas',
    preco: 12,
    descricao: 'Suco regional de mangaba fresco e refrescante.',
    imagem: '/images/suco_mangaba.jpg',
    periodoEspecial: false,
    unidadesDisponiveis: todasUnidades
  },
  {
    id: 'cafe_nordestino',
    nome: 'Café Nordestino',
    categoria: 'Bebidas',
    preco: 9.5,
    descricao: 'Café coado com rapadura e canela.',
    imagem: '/images/cafe_nordestino.jpg',
    periodoEspecial: false,
    unidadesDisponiveis: todasUnidades
  },
  {
    id: 'agua_coco',
    nome: 'Água de Coco',
    categoria: 'Bebidas',
    preco: 10,
    descricao: 'Água de coco gelada servida em copo.',
    imagem: '/images/agua_coco.jpg',
    periodoEspecial: false,
    unidadesDisponiveis: todasUnidades
  },
  {
    id: 'mate_limao',
    nome: 'Mate Gelado com Limão',
    categoria: 'Bebidas',
    preco: 9.9,
    descricao: 'Clássico mate carioca gelado com limão.',
    imagem: '/images/mate_limao.jpg',
    periodoEspecial: false,
    unidadesDisponiveis: todasUnidades
  },
  {
    id: 'combo_tapioca_suco',
    nome: 'Combo Tapioca + Suco',
    categoria: 'Combos',
    preco: 27.9,
    descricao: 'Tapioca de queijo coalho acompanhada de suco de caju.',
    imagem: '/images/combo_tapioca_suco.jpg',
    periodoEspecial: false,
    unidadesDisponiveis: todasUnidades
  },
  {
    id: 'combo_cuscuz_cafe',
    nome: 'Combo Cuscuz + Café',
    categoria: 'Combos',
    preco: 24.9,
    descricao: 'Cuscuz recheado acompanhado de café nordestino.',
    imagem: '/images/combo_cuscuz_cafe.jpg',
    periodoEspecial: false,
    unidadesDisponiveis: todasUnidades
  },
  {
    id: 'combo_bolo_cafe',
    nome: 'Combo Bolo + Café',
    categoria: 'Combos',
    preco: 20.9,
    descricao: 'Fatia de bolo de macaxeira acompanhada de café nordestino.',
    imagem: '/images/combo_bolo_cafe.jpg',
    periodoEspecial: false,
    unidadesDisponiveis: todasUnidades
  },
  {
    id: 'combo_familia',
    nome: 'Combo Família Nordestina',
    categoria: 'Combos',
    preco: 69.9,
    descricao: 'Duas tapiocas, dois bolos e duas bebidas para compartilhar.',
    imagem: '/images/combo_familia.jpg',
    periodoEspecial: false,
    unidadesDisponiveis: todasUnidades
  },
  {
    id: 'combo_turistico_carioca',
    nome: 'Combo Turístico Carioca',
    categoria: 'Combos',
    preco: 34.9,
    descricao: 'Exclusivo de Copacabana com tapioca, mate gelado e bolo de rolo.',
    imagem: '/images/combo_turistico_carioca.jpg',
    periodoEspecial: false,
    unidadesDisponiveis: ['copacabana']
  },
  {
    id: 'cafe_colonial_nordestino',
    nome: 'Café Colonial Nordestino',
    categoria: 'Combos',
    preco: 44.9,
    descricao: 'Exclusivo de Paraty com café, cuscuz, tapioca e seleção de bolos.',
    imagem: '/images/cafe_colonial_nordestino.jpg',
    periodoEspecial: false,
    unidadesDisponiveis: ['paraty']
  }
];

// Promoções exibidas na Home, associadas aos produtos por id.
export const promocoes = [
  {
    id: 'promo_tapioca_suco',
    titulo: 'Combo Rei do Baião',
    descricao: 'Leve o combo de tapioca com suco em uma promoção inspirada no Rei do Baião.',
    desconto: 15,
    produtos: ['combo_tapioca_suco'],
    validade: '2026-12-31'
  },
  {
    id: 'promo_turistico',
    titulo: 'Combo Maria Bonita',
    descricao: 'Desconto especial no Combo Turístico Carioca em homenagem à cultura nordestina.',
    desconto: 10,
    produtos: ['combo_turistico_carioca'],
    validade: '2026-11-30'
  },
  {
    id: 'promo_bolo_cafe',
    titulo: 'Combo Sertanejo',
    descricao: 'Aproveite o combo de bolo com o tradicional Café do Gonzagão.',
    desconto: 12,
    produtos: ['combo_bolo_cafe'],
    validade: '2026-10-15'
  }
];

// Recompensas usadas para demonstrar o programa de fidelidade por pontos.
export const recompensas = [
  {
    id: 'reward_cafe',
    titulo: 'Café do Gonzagão',
    descricao: 'Troque 100 pontos por um café nordestino inspirado no Rei do Baião.',
    pontosNecessarios: 100,
    tipo: 'Brinde'
  },
  {
    id: 'reward_bolo',
    titulo: 'Recompensa Asa Branca',
    descricao: 'Troque 180 pontos por R$ 10,00 de desconto no bolo de macaxeira.',
    pontosNecessarios: 180,
    tipo: 'Desconto'
  },
  {
    id: 'reward_combo',
    titulo: 'Brinde do Sertão',
    descricao: 'Troque 250 pontos por 20% de desconto em qualquer combo nordestino.',
    pontosNecessarios: 250,
    tipo: 'Desconto'
  }
];

// Pedidos fictícios alimentam o acompanhamento do cliente.
export const pedidosMock = [
  {
    id: 'pedido_001',
    unidadeId: 'copacabana',
    itens: [
      { produtoId: 'combo_turistico_carioca', quantidade: 1, precoUnitario: 34.9 }
    ],
    total: 34.9,
    status: 'Concluído',
    cliente: 'Lampião Silva',
    data: '2026-06-10T12:35:00'
  },
  {
    id: 'pedido_002',
    unidadeId: 'madureira',
    itens: [
      { produtoId: 'cuscuz_especial_casa', quantidade: 1, precoUnitario: 28.9 },
      { produtoId: 'cafe_nordestino', quantidade: 1, precoUnitario: 9.5 }
    ],
    total: 38.4,
    status: 'Em preparação',
    cliente: 'Maria Bonita Santos',
    data: '2026-06-11T09:20:00'
  },
  {
    id: 'pedido_003',
    unidadeId: 'buzios',
    itens: [
      { produtoId: 'tapioca_camarao', quantidade: 1, precoUnitario: 32.9 },
      { produtoId: 'agua_coco', quantidade: 1, precoUnitario: 10 }
    ],
    total: 42.9,
    status: 'Aguardando retirada',
    cliente: 'Luiz Gonzaga Almeida',
    data: '2026-06-11T14:05:00'
  },
  {
    id: 'pedido_004',
    unidadeId: 'paraty',
    itens: [
      { produtoId: 'cafe_colonial_nordestino', quantidade: 1, precoUnitario: 44.9 }
    ],
    total: 44.9,
    status: 'Concluído',
    cliente: 'Dominguinhos Ferreira',
    data: '2026-06-11T15:30:00'
  },
  {
    id: 'pedido_005',
    unidadeId: 'niteroi',
    itens: [
      { produtoId: 'combo_familia', quantidade: 1, precoUnitario: 69.9 }
    ],
    total: 69.9,
    status: 'Em preparação',
    cliente: 'Elba Ramalho Costa',
    data: '2026-06-11T17:10:00'
  },
  {
    id: 'pedido_006',
    unidadeId: 'recreio',
    itens: [
      { produtoId: 'tapioca_carne_seca', quantidade: 1, precoUnitario: 24.9 },
      { produtoId: 'mate_limao', quantidade: 1, precoUnitario: 9.9 }
    ],
    total: 34.8,
    status: 'Aguardando retirada',
    cliente: 'Ariano Suassuna Rocha',
    data: '2026-06-11T18:45:00'
  }
];
