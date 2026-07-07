import React, { useState, useRef, useEffect } from "react";
import {
  Home, FileWarning, ListChecks, LayoutGrid, MessageCircle,
  Send, X, ChevronDown, Search, MapPin, CheckCircle2, Clock,
  Sparkles, ArrowRight, Type as TypeIcon, Plus, Camera, Briefcase, Baby,
  Cake, Users, Lock, Bell, Mail, ShieldCheck, User, LogOut,
  Phone, Fingerprint, PenTool, UploadCloud, FileText, Hash, Download, Car,
  Languages, Accessibility, Contrast, Volume2, Mic, Newspaper, BarChart3,
} from "lucide-react";

/* ---------------------------------------------------------------
   CONTENT — English / Portuguese / Spanish
--------------------------------------------------------------- */

const T = {
  en: {
    brand: "MyGov", tagline: "Government services, made plain.",
    nav_dashboard: "Dashboard", nav_report: "Report an Issue", nav_track: "Track Complaints",
    nav_services: "Services", nav_sign: "Sign Documents", nav_public_data: "Public Data",
    nav_news: "News", nav_account: "My Account",
    assistant: "MyGov Assistant",
    welcome: "Welcome back", welcome_sub: "Here's what's happening with your city account.",
    welcome_guest_sub: "Create your MyGov account to unlock personalized services.",
    stat_open: "Open reports", stat_resolved: "Resolved", stat_services: "Services available",
    quick_actions: "Quick actions", qa_report: "Report a problem", qa_track: "Check a complaint",
    qa_services: "Browse services", qa_ask: "Ask the assistant",
    ask_suggestions: "Try asking",
    s1: "What documents do I need to renew my ID?",
    s2: "Translate this notice for me",
    s3: "Which benefit am I eligible for?",
    no_account_banner: "You're browsing as a guest. Create a MyGov account to file reports, track them, and sign documents online.",
    no_account_cta: "Create account",

    report_title: "Report a public issue", report_sub: "Tell us what's wrong. We'll route it to the right department.",
    f_title: "Short title", f_desc: "Describe the issue", f_category: "Category", f_location: "Location",
    f_photo: "Attach a photo (optional)", f_suggest: "Suggest category with AI", f_submit: "Submit report",
    f_title_ph: "e.g. Large pothole on Main St", f_desc_ph: "Describe what you saw, when, and how urgent it is...",
    f_location_ph: "Street, neighborhood or landmark",
    submitted_toast: "Report filed. Ticket",

    track_title: "Track your complaints", track_sub: "Every report gets a ticket you can follow end to end.",
    filter_all: "All", status_submitted: "Submitted", status_review: "In review", status_progress: "In progress",
    status_resolved: "Resolved", status_urgent: "Urgent",
    timeline: "Timeline", no_complaints: "No complaints match this filter.",

    services_title: "Public services catalog", services_sub: "Search, understand requirements, and get AI help in seconds.",
    search_ph: "Search services (e.g. business license, water connection)...",
    requirements: "Requirements", processing_time: "Typical time", fee: "Fee", ask_about: "Ask AI about this",

    chat_title: "MyGov Assistant", chat_sub: "Ask in any language. I'll explain, translate and guide you.",
    chat_placeholder: "Type your question...", chat_empty: "How can I help with a government service today?",
    chat_thinking: "Thinking...", close: "Close", open_assistant: "Ask the assistant",
    read_aloud: "Listen", voice_start: "Speak instead of typing", voice_listening: "Listening...",
    voice_unsupported: "Voice input isn't supported in this browser.",

    lang_label: "Language",

    a11y_title: "Accessibility", a11y_text_size: "Text size", a11y_high_contrast: "High contrast",
    a11y_simple_language: "Simple language in the assistant",
    a11y_simple_language_desc: "Ask the assistant to reply with short sentences and simple words.",

    life_events_title: "Browse by life event", life_events_sub: "The same way modern digital government portals organize services — by what's happening in your life, not by which office handles it.",
    le_moving: "Moving to a new city", le_business: "Starting a business", le_baby: "Having a baby",
    le_adult: "Turning 18", le_marriage: "Getting married", le_driving: "Buying a vehicle",

    account_tier: "Verification level", tier_bronze: "Bronze", tier_silver: "Silver", tier_gold: "Gold",
    sign_in_pill: "Sign in",
    locked_tag: "Requires", unlock_cta: "How do I raise my verification level?",

    mailbox_title: "Digital Mailbox", mailbox_sub: "Official notices land here, delivered straight to your secure inbox.",
    mailbox_empty: "No new messages.",
    mailbox_locked: "Sign in to view your secure mailbox.",

    showing_for: "Showing services for", clear_filter: "Clear",

    mb1_title: "Business registration approved", mb1_body: "Your Small Business Registration application was approved. Certificate ready for download.",
    mb2_title: "ID renewal reminder", mb2_body: "Your National ID expires in 30 days. Start the renewal to avoid a gap.",
    mb3_title: "Update on ticket CV-10234", mb3_body: "The Utilities crew ordered replacement parts for your streetlight report.",

    account_title: "My Account", account_sub: "One MyGov account, tied to your national ID number — just like your identity, you can only have one.",
    acc_tab_create: "Create account", acc_tab_signin: "Sign in",
    acc_full_name: "Full name", acc_id_number: "National ID number", acc_dob: "Date of birth",
    acc_email: "Email address", acc_password: "Password", acc_confirm_password: "Confirm password",
    acc_name_ph: "e.g. Jordan Silva", acc_id_ph: "e.g. 123-45-6789", acc_email_ph: "you@example.com",
    acc_password_ph: "At least 8 characters",
    acc_create_btn: "Create my account", acc_signin_btn: "Sign in",
    acc_error_exists: "An account already exists for this ID number. Please sign in instead.",
    acc_error_notfound: "We couldn't find an account with those details.",
    acc_error_mismatch: "Passwords don't match.",
    acc_profile_title: "Account overview", acc_member_since: "Member since",
    acc_verification_level: "Verification level",
    acc_upgrade_silver: "Verify phone number & address",
    acc_upgrade_silver_desc: "Unlocks services like business registration and benefit applications.",
    acc_upgrade_gold: "Verify identity with a government ID scan",
    acc_upgrade_gold_desc: "Unlocks high-security services like building permits and document signing.",
    acc_logout: "Sign out",
    acc_demo_cta: "Explore with a demo account",
    acc_demo_hint: "See what the site looks like signed in, without filling out the sign-up form.",

    sign_title: "Sign documents online",
    sign_sub: "Sign official and personal documents with a secure digital signature, recognized the same way a notarized signature is.",
    sign_login_required: "Sign in to your MyGov account to sign documents.",
    sign_login_cta: "Go to My Account",
    sign_locked_msg: "Signing documents requires a verification level of",
    sign_upload_title: "Add a document to sign",
    sign_upload_ph: "e.g. Rental-Agreement.pdf",
    sign_upload_btn: "Add document",
    sign_pending_title: "Awaiting your signature",
    sign_empty_pending: "No documents waiting for your signature.",
    sign_btn: "Sign document",
    sign_history_title: "Signed documents",
    sign_empty_history: "You haven't signed any documents yet.",
    sign_cert_label: "Verification code",
    sign_signed_by: "Signed by",
    sign_signed_on: "Signed on",
    sign_download: "Download",

    pd_title: "Public data & transparency",
    pd_sub: "Track how public services are performing based on citywide reports.",
    pd_total_reports: "Total reports", pd_overall_resolution: "Overall resolution rate",
    pd_avg_time: "Average resolution time", pd_by_category: "Performance by category",
    pd_category_col: "Category", pd_reports_col: "Reports", pd_avgtime_col: "Avg. time", pd_resolved_col: "Resolved",

    news_title: "Government news",
    news_sub: "Updates on public services, deadlines, and what's new in the city.",
    news_explain_btn: "Explain in plain language",
  },

  pt: {
    brand: "MyGov", tagline: "Serviços públicos, sem burocracia.",
    nav_dashboard: "Painel", nav_report: "Relatar Problema", nav_track: "Acompanhar",
    nav_services: "Serviços", nav_sign: "Assinar Documentos", nav_public_data: "Dados Públicos",
    nav_news: "Notícias", nav_account: "Minha Conta",
    assistant: "Assistente MyGov",
    welcome: "Bem-vindo de volta", welcome_sub: "Veja o que está acontecendo na sua conta cidadã.",
    welcome_guest_sub: "Crie sua conta MyGov para desbloquear serviços personalizados.",
    stat_open: "Relatos abertos", stat_resolved: "Resolvidos", stat_services: "Serviços disponíveis",
    quick_actions: "Ações rápidas", qa_report: "Relatar um problema", qa_track: "Ver uma reclamação",
    qa_services: "Ver serviços", qa_ask: "Perguntar ao assistente",
    ask_suggestions: "Experimente perguntar",
    s1: "Quais documentos preciso para renovar minha identidade?",
    s2: "Traduza este comunicado para mim",
    s3: "A qual benefício tenho direito?",
    no_account_banner: "Você está navegando como visitante. Crie uma conta MyGov para enviar relatos, acompanhá-los e assinar documentos online.",
    no_account_cta: "Criar conta",

    report_title: "Relatar um problema público", report_sub: "Conte o que está errado. Vamos direcionar ao setor certo.",
    f_title: "Título breve", f_desc: "Descreva o problema", f_category: "Categoria", f_location: "Local",
    f_photo: "Anexar foto (opcional)", f_suggest: "Sugerir categoria com IA", f_submit: "Enviar relato",
    f_title_ph: "ex: Buraco grande na Av. Principal", f_desc_ph: "Descreva o que viu, quando e a urgência...",
    f_location_ph: "Rua, bairro ou ponto de referência",
    submitted_toast: "Relato registrado. Protocolo",

    track_title: "Acompanhe suas reclamações", track_sub: "Cada relato gera um protocolo rastreável do início ao fim.",
    filter_all: "Todos", status_submitted: "Enviado", status_review: "Em análise", status_progress: "Em andamento",
    status_resolved: "Resolvido", status_urgent: "Urgente",
    timeline: "Linha do tempo", no_complaints: "Nenhuma reclamação nesse filtro.",

    services_title: "Catálogo de serviços públicos", services_sub: "Busque, entenda exigências e peça ajuda da IA em segundos.",
    search_ph: "Buscar serviços (ex: alvará, ligação de água)...",
    requirements: "Documentos exigidos", processing_time: "Prazo médio", fee: "Taxa", ask_about: "Perguntar à IA sobre isso",

    chat_title: "Assistente MyGov", chat_sub: "Pergunte em qualquer idioma. Eu explico, traduzo e oriento.",
    chat_placeholder: "Digite sua pergunta...", chat_empty: "Como posso ajudar com um serviço público hoje?",
    chat_thinking: "Pensando...", close: "Fechar", open_assistant: "Falar com o assistente",
    read_aloud: "Ouvir", voice_start: "Falar em vez de digitar", voice_listening: "Ouvindo...",
    voice_unsupported: "Entrada por voz não é compatível com este navegador.",

    lang_label: "Idioma",

    a11y_title: "Acessibilidade", a11y_text_size: "Tamanho do texto", a11y_high_contrast: "Alto contraste",
    a11y_simple_language: "Linguagem simples no assistente",
    a11y_simple_language_desc: "Peça ao assistente para responder com frases curtas e palavras simples.",

    life_events_title: "Navegue por evento de vida", life_events_sub: "O mesmo jeito que portais digitais de governo organizam serviços — pelo que está acontecendo na sua vida, não por qual órgão atende.",
    le_moving: "Mudando de cidade", le_business: "Abrindo um negócio", le_baby: "Esperando um bebê",
    le_adult: "Fazendo 18 anos", le_marriage: "Vai se casar", le_driving: "Comprando um veículo",

    account_tier: "Nível de verificação", tier_bronze: "Bronze", tier_silver: "Prata", tier_gold: "Ouro",
    sign_in_pill: "Entrar",
    locked_tag: "Exige nível", unlock_cta: "Como eu subo meu nível de verificação?",

    mailbox_title: "Caixa de Mensagens", mailbox_sub: "Avisos oficiais chegam aqui, direto na sua caixa de entrada segura.",
    mailbox_empty: "Nenhuma mensagem nova.",
    mailbox_locked: "Entre na sua conta para ver sua caixa de mensagens segura.",

    showing_for: "Mostrando serviços para", clear_filter: "Limpar",

    mb1_title: "Registro de empresa aprovado", mb1_body: "Sua solicitação de Registro de Pequena Empresa foi aprovada. Certificado disponível para download.",
    mb2_title: "Lembrete de renovação de identidade", mb2_body: "Sua identidade nacional vence em 30 dias. Inicie a renovação para evitar imprevistos.",
    mb3_title: "Atualização do protocolo CV-10234", mb3_body: "A equipe de Utilidades solicitou peças de reposição para seu relato de iluminação pública.",

    account_title: "Minha Conta", account_sub: "Uma única conta MyGov, vinculada ao seu número de identidade nacional — assim como sua identidade, você só pode ter uma.",
    acc_tab_create: "Criar conta", acc_tab_signin: "Entrar",
    acc_full_name: "Nome completo", acc_id_number: "Número de identidade nacional", acc_dob: "Data de nascimento",
    acc_email: "E-mail", acc_password: "Senha", acc_confirm_password: "Confirmar senha",
    acc_name_ph: "ex: Jordan Silva", acc_id_ph: "ex: 123.456.789-00", acc_email_ph: "voce@exemplo.com",
    acc_password_ph: "Pelo menos 8 caracteres",
    acc_create_btn: "Criar minha conta", acc_signin_btn: "Entrar",
    acc_error_exists: "Já existe uma conta com esse número de identidade. Faça login em vez disso.",
    acc_error_notfound: "Não encontramos uma conta com esses dados.",
    acc_error_mismatch: "As senhas não coincidem.",
    acc_profile_title: "Resumo da conta", acc_member_since: "Membro desde",
    acc_verification_level: "Nível de verificação",
    acc_upgrade_silver: "Verificar telefone e endereço",
    acc_upgrade_silver_desc: "Desbloqueia serviços como registro de empresa e pedidos de benefício.",
    acc_upgrade_gold: "Verificar identidade com documento oficial",
    acc_upgrade_gold_desc: "Desbloqueia serviços de alta segurança, como alvará de obra e assinatura de documentos.",
    acc_logout: "Sair da conta",
    acc_demo_cta: "Explorar com uma conta de demonstração",
    acc_demo_hint: "Veja como fica o site logado, sem precisar preencher o cadastro.",

    sign_title: "Assine documentos online",
    sign_sub: "Assine documentos oficiais e pessoais com uma assinatura digital segura, com o mesmo valor de uma assinatura reconhecida em cartório.",
    sign_login_required: "Entre na sua conta MyGov para assinar documentos.",
    sign_login_cta: "Ir para Minha Conta",
    sign_locked_msg: "Assinar documentos exige nível de verificação",
    sign_upload_title: "Adicionar um documento para assinar",
    sign_upload_ph: "ex: Contrato-de-Aluguel.pdf",
    sign_upload_btn: "Adicionar documento",
    sign_pending_title: "Aguardando sua assinatura",
    sign_empty_pending: "Nenhum documento aguardando sua assinatura.",
    sign_btn: "Assinar documento",
    sign_history_title: "Documentos assinados",
    sign_empty_history: "Você ainda não assinou nenhum documento.",
    sign_cert_label: "Código de verificação",
    sign_signed_by: "Assinado por",
    sign_signed_on: "Assinado em",
    sign_download: "Baixar",

    pd_title: "Dados públicos e transparência",
    pd_sub: "Acompanhe o desempenho dos serviços públicos com base nos relatos da cidade.",
    pd_total_reports: "Relatos no total", pd_overall_resolution: "Taxa geral de resolução",
    pd_avg_time: "Tempo médio de resolução", pd_by_category: "Desempenho por categoria",
    pd_category_col: "Categoria", pd_reports_col: "Relatos", pd_avgtime_col: "Tempo médio", pd_resolved_col: "Resolvidos",

    news_title: "Notícias do governo",
    news_sub: "Atualizações sobre serviços públicos, prazos e novidades da cidade.",
    news_explain_btn: "Explicar em linguagem simples",
  },

  es: {
    brand: "MyGov", tagline: "Servicios públicos, sin complicaciones.",
    nav_dashboard: "Panel", nav_report: "Reportar Problema", nav_track: "Seguimiento",
    nav_services: "Servicios", nav_sign: "Firmar Documentos", nav_public_data: "Datos Públicos",
    nav_news: "Noticias", nav_account: "Mi Cuenta",
    assistant: "Asistente MyGov",
    welcome: "Bienvenido de nuevo", welcome_sub: "Esto es lo que pasa en tu cuenta ciudadana.",
    welcome_guest_sub: "Crea tu cuenta MyGov para desbloquear servicios personalizados.",
    stat_open: "Reportes abiertos", stat_resolved: "Resueltos", stat_services: "Servicios disponibles",
    quick_actions: "Acciones rápidas", qa_report: "Reportar un problema", qa_track: "Ver una queja",
    qa_services: "Ver servicios", qa_ask: "Preguntar al asistente",
    ask_suggestions: "Prueba preguntando",
    s1: "¿Qué documentos necesito para renovar mi identificación?",
    s2: "Tradúceme este aviso",
    s3: "¿A qué beneficio tengo derecho?",
    no_account_banner: "Estás navegando como invitado. Crea una cuenta MyGov para enviar reportes, darles seguimiento y firmar documentos en línea.",
    no_account_cta: "Crear cuenta",

    report_title: "Reportar un problema público", report_sub: "Cuéntanos qué pasa. Lo enviaremos al área correcta.",
    f_title: "Título breve", f_desc: "Describe el problema", f_category: "Categoría", f_location: "Ubicación",
    f_photo: "Adjuntar foto (opcional)", f_suggest: "Sugerir categoría con IA", f_submit: "Enviar reporte",
    f_title_ph: "ej: Bache grande en Av. Principal", f_desc_ph: "Describe qué viste, cuándo y la urgencia...",
    f_location_ph: "Calle, barrio o punto de referencia",
    submitted_toast: "Reporte enviado. Ticket",

    track_title: "Sigue tus quejas", track_sub: "Cada reporte genera un ticket rastreable de inicio a fin.",
    filter_all: "Todos", status_submitted: "Enviado", status_review: "En revisión", status_progress: "En progreso",
    status_resolved: "Resuelto", status_urgent: "Urgente",
    timeline: "Cronología", no_complaints: "Ninguna queja coincide con este filtro.",

    services_title: "Catálogo de servicios públicos", services_sub: "Busca, entiende requisitos y pide ayuda de IA en segundos.",
    search_ph: "Buscar servicios (ej: licencia, conexión de agua)...",
    requirements: "Requisitos", processing_time: "Tiempo típico", fee: "Costo", ask_about: "Preguntar a la IA",

    chat_title: "Asistente MyGov", chat_sub: "Pregunta en cualquier idioma. Explico, traduzco y guío.",
    chat_placeholder: "Escribe tu pregunta...", chat_empty: "¿Cómo puedo ayudarte con un servicio público hoy?",
    chat_thinking: "Pensando...", close: "Cerrar", open_assistant: "Hablar con el asistente",
    read_aloud: "Escuchar", voice_start: "Hablar en vez de escribir", voice_listening: "Escuchando...",
    voice_unsupported: "La entrada de voz no es compatible con este navegador.",

    lang_label: "Idioma",

    a11y_title: "Accesibilidad", a11y_text_size: "Tamaño del texto", a11y_high_contrast: "Alto contraste",
    a11y_simple_language: "Lenguaje simple en el asistente",
    a11y_simple_language_desc: "Pide al asistente que responda con frases cortas y palabras simples.",

    life_events_title: "Explora por evento de vida", life_events_sub: "La misma forma en que los portales digitales de gobierno organizan servicios — por lo que pasa en tu vida, no por qué oficina lo atiende.",
    le_moving: "Mudándote de ciudad", le_business: "Iniciando un negocio", le_baby: "Esperando un bebé",
    le_adult: "Cumpliendo 18 años", le_marriage: "Vas a casarte", le_driving: "Comprando un vehículo",

    account_tier: "Nivel de verificación", tier_bronze: "Bronce", tier_silver: "Plata", tier_gold: "Oro",
    sign_in_pill: "Iniciar sesión",
    locked_tag: "Requiere nivel", unlock_cta: "¿Cómo subo mi nivel de verificación?",

    mailbox_title: "Buzón Digital", mailbox_sub: "Los avisos oficiales llegan aquí, directo a tu bandeja segura.",
    mailbox_empty: "No hay mensajes nuevos.",
    mailbox_locked: "Inicia sesión para ver tu buzón seguro.",

    showing_for: "Mostrando servicios para", clear_filter: "Limpiar",

    mb1_title: "Registro de empresa aprobado", mb1_body: "Tu solicitud de Registro de Pequeña Empresa fue aprobada. Certificado disponible para descargar.",
    mb2_title: "Recordatorio de renovación de ID", mb2_body: "Tu identificación nacional vence en 30 días. Inicia la renovación para evitar contratiempos.",
    mb3_title: "Actualización del ticket CV-10234", mb3_body: "El equipo de Servicios solicitó repuestos para tu reporte de alumbrado público.",

    account_title: "Mi Cuenta", account_sub: "Una sola cuenta MyGov, vinculada a tu número de identificación nacional — igual que tu identidad, solo puedes tener una.",
    acc_tab_create: "Crear cuenta", acc_tab_signin: "Iniciar sesión",
    acc_full_name: "Nombre completo", acc_id_number: "Número de identificación nacional", acc_dob: "Fecha de nacimiento",
    acc_email: "Correo electrónico", acc_password: "Contraseña", acc_confirm_password: "Confirmar contraseña",
    acc_name_ph: "ej: Jordan Silva", acc_id_ph: "ej: 12.345.678-9", acc_email_ph: "tu@ejemplo.com",
    acc_password_ph: "Al menos 8 caracteres",
    acc_create_btn: "Crear mi cuenta", acc_signin_btn: "Iniciar sesión",
    acc_error_exists: "Ya existe una cuenta con ese número de identificación. Inicia sesión en su lugar.",
    acc_error_notfound: "No encontramos una cuenta con esos datos.",
    acc_error_mismatch: "Las contraseñas no coinciden.",
    acc_profile_title: "Resumen de la cuenta", acc_member_since: "Miembro desde",
    acc_verification_level: "Nivel de verificación",
    acc_upgrade_silver: "Verificar teléfono y domicilio",
    acc_upgrade_silver_desc: "Desbloquea servicios como registro de empresa y solicitudes de beneficios.",
    acc_upgrade_gold: "Verificar identidad con documento oficial",
    acc_upgrade_gold_desc: "Desbloquea servicios de alta seguridad, como permisos de construcción y firma de documentos.",
    acc_logout: "Cerrar sesión",
    acc_demo_cta: "Explorar con una cuenta de demostración",
    acc_demo_hint: "Mira cómo se ve el sitio con sesión iniciada, sin necesidad de registrarte.",

    sign_title: "Firma documentos en línea",
    sign_sub: "Firma documentos oficiales y personales con una firma digital segura, con el mismo valor que una firma notariada.",
    sign_login_required: "Inicia sesión en tu cuenta MyGov para firmar documentos.",
    sign_login_cta: "Ir a Mi Cuenta",
    sign_locked_msg: "Firmar documentos requiere un nivel de verificación",
    sign_upload_title: "Agregar un documento para firmar",
    sign_upload_ph: "ej: Contrato-de-Arriendo.pdf",
    sign_upload_btn: "Agregar documento",
    sign_pending_title: "Esperando tu firma",
    sign_empty_pending: "No hay documentos esperando tu firma.",
    sign_btn: "Firmar documento",
    sign_history_title: "Documentos firmados",
    sign_empty_history: "Aún no has firmado ningún documento.",
    sign_cert_label: "Código de verificación",
    sign_signed_by: "Firmado por",
    sign_signed_on: "Firmado el",
    sign_download: "Descargar",

    pd_title: "Datos públicos y transparencia",
    pd_sub: "Sigue el desempeño de los servicios públicos según los reportes de la ciudad.",
    pd_total_reports: "Reportes totales", pd_overall_resolution: "Tasa general de resolución",
    pd_avg_time: "Tiempo promedio de resolución", pd_by_category: "Desempeño por categoría",
    pd_category_col: "Categoría", pd_reports_col: "Reportes", pd_avgtime_col: "Tiempo promedio", pd_resolved_col: "Resueltos",

    news_title: "Noticias del gobierno",
    news_sub: "Actualizaciones sobre servicios públicos, plazos y novedades de la ciudad.",
    news_explain_btn: "Explicar en lenguaje simple",
  },
};

const LANG_SPEECH = { en: "en-US", pt: "pt-BR", es: "es-ES" };

const CATEGORIES = [
  "Roads & Potholes", "Waste & Sanitation", "Water & Drainage",
  "Public Lighting", "Public Safety", "Parks & Green Spaces", "Noise Complaint", "Other",
];

const CATEGORY_LABELS = {
  en: Object.fromEntries(CATEGORIES.map((c) => [c, c])),
  pt: {
    "Roads & Potholes": "Vias e Buracos", "Waste & Sanitation": "Lixo e Saneamento",
    "Water & Drainage": "Água e Drenagem", "Public Lighting": "Iluminação Pública",
    "Public Safety": "Segurança Pública", "Parks & Green Spaces": "Parques e Áreas Verdes",
    "Noise Complaint": "Reclamação de Ruído", "Other": "Outro",
  },
  es: {
    "Roads & Potholes": "Vías y Baches", "Waste & Sanitation": "Residuos y Saneamiento",
    "Water & Drainage": "Agua y Drenaje", "Public Lighting": "Alumbrado Público",
    "Public Safety": "Seguridad Pública", "Parks & Green Spaces": "Parques y Áreas Verdes",
    "Noise Complaint": "Queja de Ruido", "Other": "Otro",
  },
};

const TIER_ORDER = ["bronze", "silver", "gold"];

const SERVICES = [
  { id: "svc-id", name: "National ID Renewal", dept: "Civil Registry", time: "5–10 business days", fee: "Free for first renewal", minTier: "bronze",
    reqs: ["Old ID card or loss report", "Proof of address (last 3 months)", "2 recent photos", "Birth certificate (first-time only)"] },
  { id: "svc-biz", name: "Small Business Registration", dept: "Economic Development Office", time: "3–7 business days", fee: "$25–$120 depending on activity", minTier: "silver",
    reqs: ["Owner's ID", "Proof of business address", "Activity declaration form", "Tax registration number"] },
  { id: "svc-water", name: "Water Connection Permit", dept: "Water & Sanitation Authority", time: "10–15 business days", fee: "Connection fee applies", minTier: "bronze",
    reqs: ["Property ownership or lease proof", "Site plan / address", "ID of applicant", "Zoning clearance"] },
  { id: "svc-build", name: "Building Permit", dept: "Urban Planning Department", time: "15–30 business days", fee: "Based on project size", minTier: "gold",
    reqs: ["Architectural plans", "Land title", "Structural engineer report", "Neighbor notification form"] },
  { id: "svc-transit", name: "Public Transport Card", dept: "Mobility Authority", time: "Same day", fee: "$4 card fee", minTier: "bronze",
    reqs: ["Valid ID", "Passport photo", "Proof of student/senior status (for discounts)"] },
  { id: "svc-marriage", name: "Marriage Certificate", dept: "Civil Registry", time: "1–3 business days", fee: "$15", minTier: "silver",
    reqs: ["Both parties' IDs", "Birth certificates", "Two witnesses with ID", "Divorce decree if previously married"] },
  { id: "svc-birth", name: "Birth Certificate (first issue)", dept: "Civil Registry", time: "Same day at hospital, else 5 days", fee: "Free", minTier: "bronze",
    reqs: ["Hospital birth declaration", "Parents' IDs", "Marriage certificate (if applicable)"] },
  { id: "svc-waste", name: "Waste Collection Request", dept: "Sanitation Department", time: "1–2 business days", fee: "Free", minTier: "bronze",
    reqs: ["Address", "Type and volume of waste"] },
  { id: "svc-benefit", name: "Social Assistance Benefit", dept: "Social Development Secretariat", time: "20–30 business days", fee: "Free", minTier: "silver",
    reqs: ["Household income proof", "Family composition form", "ID of head of household", "Proof of residence"] },
  { id: "svc-passport", name: "Passport Application", dept: "Passport & Travel Documents Office", time: "10–20 business days", fee: "$60", minTier: "gold",
    reqs: ["Birth certificate", "National ID", "2 passport photos", "Proof of travel itinerary (for expedited service)"] },
  { id: "svc-vehicle", name: "Vehicle Registration Renewal", dept: "Department of Motor Vehicles", time: "Same day online", fee: "$35–$90 depending on vehicle type", minTier: "silver",
    reqs: ["Current registration", "Proof of insurance", "Emissions inspection certificate", "Owner's ID"] },
  { id: "svc-voter", name: "Voter Registration", dept: "Electoral Commission", time: "Immediate", fee: "Free", minTier: "bronze",
    reqs: ["National ID", "Proof of residence"] },
  { id: "svc-proptax", name: "Property Tax Payment", dept: "Revenue & Taxation Office", time: "Immediate", fee: "Based on assessed value", minTier: "bronze",
    reqs: ["Property parcel number", "Owner's ID"] },
  { id: "svc-license", name: "Professional License Renewal", dept: "Professional Licensing Board", time: "5–10 business days", fee: "$40–$150 depending on profession", minTier: "silver",
    reqs: ["Current license", "Continuing education certificate", "Proof of good standing", "Renewal fee payment"] },
];

const LIFE_EVENTS = [
  { id: "moving", icon: Home, key: "le_moving", ids: ["svc-water", "svc-waste", "svc-id"] },
  { id: "business", icon: Briefcase, key: "le_business", ids: ["svc-biz", "svc-build", "svc-license"] },
  { id: "baby", icon: Baby, key: "le_baby", ids: ["svc-birth", "svc-benefit"] },
  { id: "adult", icon: Cake, key: "le_adult", ids: ["svc-id", "svc-transit", "svc-voter"] },
  { id: "marriage", icon: Users, key: "le_marriage", ids: ["svc-marriage"] },
  { id: "driving", icon: Car, key: "le_driving", ids: ["svc-vehicle", "svc-transit"] },
];

const STATUS_META = {
  submitted: { key: "status_submitted", color: "var(--ink)" },
  review: { key: "status_review", color: "var(--marigold)" },
  progress: { key: "status_progress", color: "var(--marigold)" },
  resolved: { key: "status_resolved", color: "var(--moss)" },
  urgent: { key: "status_urgent", color: "var(--brick)" },
};

const INITIAL_COMPLAINTS = [
  { id: "CV-10234", title: "Streetlight out for 2 weeks", category: "Public Lighting", status: "progress",
    date: "Jun 28, 2026", timeline: [
      { label: "Report filed", date: "Jun 28" }, { label: "Assigned to Utilities crew", date: "Jun 30" },
      { label: "Parts ordered", date: "Jul 03" },
    ]},
  { id: "CV-10198", title: "Overflowing garbage bins, Elm Street", category: "Waste & Sanitation", status: "resolved",
    date: "Jun 15, 2026", timeline: [
      { label: "Report filed", date: "Jun 15" }, { label: "Crew dispatched", date: "Jun 16" },
      { label: "Collected & closed", date: "Jun 17" },
    ]},
  { id: "CV-10256", title: "Deep pothole causing accidents", category: "Roads & Potholes", status: "urgent",
    date: "Jul 02, 2026", timeline: [
      { label: "Report filed", date: "Jul 02" }, { label: "Flagged high priority", date: "Jul 02" },
    ]},
  { id: "CV-10201", title: "Flooded drainage after rain", category: "Water & Drainage", status: "review",
    date: "Jun 20, 2026", timeline: [
      { label: "Report filed", date: "Jun 20" }, { label: "Under technical review", date: "Jun 24" },
    ]},
];

const INITIAL_PENDING_DOCS = [
  { id: "doc-lease", name: "Lease Agreement.pdf" },
  { id: "doc-employment", name: "Employment Contract.pdf" },
];

const PUBLIC_STATS = [
  { category: "Roads & Potholes", avgDays: 6, total: 482, resolvedPct: 78 },
  { category: "Waste & Sanitation", avgDays: 2, total: 915, resolvedPct: 94 },
  { category: "Water & Drainage", avgDays: 9, total: 203, resolvedPct: 61 },
  { category: "Public Lighting", avgDays: 4, total: 340, resolvedPct: 88 },
  { category: "Public Safety", avgDays: 3, total: 156, resolvedPct: 72 },
  { category: "Parks & Green Spaces", avgDays: 7, total: 98, resolvedPct: 69 },
  { category: "Noise Complaint", avgDays: 2, total: 64, resolvedPct: 91 },
  { category: "Other", avgDays: 5, total: 47, resolvedPct: 75 },
];

const NEWS = {
  en: [
    { id: "n1", date: "Jul 5, 2026", title: "Passport processing times cut in half",
      excerpt: "The Passport & Travel Documents Office rolled out a new digital intake system, cutting typical processing time from 20 to 10 business days." },
    { id: "n2", date: "Jul 2, 2026", title: "Property tax deadline extended to August 15",
      excerpt: "Residents now have until August 15 to pay this year's property tax without late fees, following requests from several neighborhood associations." },
    { id: "n3", date: "Jun 29, 2026", title: "Vehicle registration renewal now fully online",
      excerpt: "You can now renew your vehicle registration without visiting a counter — upload your documents and pay the fee directly through the Services catalog." },
    { id: "n4", date: "Jun 25, 2026", title: "Water utility maintenance scheduled downtown this weekend",
      excerpt: "Expect reduced water pressure in the downtown area Saturday from 8am to 4pm while crews upgrade aging pipes." },
  ],
  pt: [
    { id: "n1", date: "5 de jul, 2026", title: "Tempo de emissão de passaporte cai pela metade",
      excerpt: "O Departamento de Passaportes e Documentos de Viagem lançou um novo sistema digital de recebimento, reduzindo o prazo médio de 20 para 10 dias úteis." },
    { id: "n2", date: "2 de jul, 2026", title: "Prazo do imposto predial é prorrogado até 15 de agosto",
      excerpt: "Os moradores agora têm até 15 de agosto para pagar o imposto predial deste ano sem multa, atendendo a pedidos de várias associações de bairro." },
    { id: "n3", date: "29 de jun, 2026", title: "Renovação do licenciamento de veículos agora é 100% online",
      excerpt: "Agora você pode renovar o licenciamento do seu veículo sem ir a um guichê — envie seus documentos e pague a taxa direto pelo catálogo de Serviços." },
    { id: "n4", date: "25 de jun, 2026", title: "Manutenção na rede de água no centro neste fim de semana",
      excerpt: "Espere queda na pressão da água na região central no sábado, das 8h às 16h, enquanto as equipes substituem tubulações antigas." },
  ],
  es: [
    { id: "n1", date: "5 jul, 2026", title: "El tiempo de trámite del pasaporte se reduce a la mitad",
      excerpt: "La Oficina de Pasaportes y Documentos de Viaje implementó un nuevo sistema digital de recepción, reduciendo el plazo promedio de 20 a 10 días hábiles." },
    { id: "n2", date: "2 jul, 2026", title: "Se prorroga el plazo del impuesto predial hasta el 15 de agosto",
      excerpt: "Los residentes ahora tienen hasta el 15 de agosto para pagar el impuesto predial de este año sin recargos, atendiendo solicitudes de varias asociaciones vecinales." },
    { id: "n3", date: "29 jun, 2026", title: "La renovación de la matrícula vehicular ya es 100% en línea",
      excerpt: "Ahora puedes renovar la matrícula de tu vehículo sin visitar una ventanilla — sube tus documentos y paga la tarifa directamente desde el catálogo de Servicios." },
    { id: "n4", date: "25 jun, 2026", title: "Mantenimiento de la red de agua en el centro este fin de semana",
      excerpt: "Espera menor presión de agua en el centro el sábado de 8am a 4pm mientras los equipos reemplazan tuberías antiguas." },
  ],
};

const DEMO_ACCOUNT = {
  name: "Alex Morgan", idNumber: "999-99-9999", dob: "1990-05-14",
  email: "alex.morgan@example.com", password: "demo1234", tier: "gold", memberSince: 2024,
};

/* ---------------------------------------------------------------
   AI CALL HELPER
--------------------------------------------------------------- */

async function askClaude(systemPrompt, history) {
  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "claude-sonnet-4-6",
      max_tokens: 1000,
      system: systemPrompt,
      messages: history,
    }),
  });
  const data = await response.json();
  const text = (data.content || []).map((b) => (b.type === "text" ? b.text : "")).join("\n").trim();
  return text || "Sorry, I couldn't process that.";
}

function maskId(id) {
  if (!id) return "";
  const clean = String(id);
  if (clean.length <= 4) return clean;
  return clean.slice(0, -4).replace(/[^-\s]/g, "•") + clean.slice(-4);
}

/* ---------------------------------------------------------------
   SMALL UI PRIMITIVES
--------------------------------------------------------------- */

function Stamp({ children, color }) {
  return (
    <span className="stamp" style={{ "--stamp-color": color }}>
      {children}
    </span>
  );
}

function StatCard({ value, label, icon }) {
  return (
    <div className="stat-card">
      <div className="stat-icon">{icon}</div>
      <div>
        <div className="stat-value">{value}</div>
        <div className="stat-label">{label}</div>
      </div>
    </div>
  );
}

function ToggleSwitch({ on, onToggle }) {
  return (
    <button type="button" className={`toggle-switch ${on ? "on" : ""}`} onClick={onToggle} aria-pressed={on}>
      <span className="toggle-knob" />
    </button>
  );
}

/* ---------------------------------------------------------------
   MAIN APP
--------------------------------------------------------------- */

export default function MyGov() {
  const [lang, setLang] = useState("en");
  const t = T[lang];

  const [view, setView] = useState("dashboard");
  const [fontScale, setFontScale] = useState(1);
  const [highContrast, setHighContrast] = useState(false);
  const [simpleLanguage, setSimpleLanguage] = useState(false);
  const [a11yOpen, setA11yOpen] = useState(false);

  const [chatOpen, setChatOpen] = useState(false);
  const [complaints, setComplaints] = useState(INITIAL_COMPLAINTS);
  const [statusFilter, setStatusFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [mailboxOpen, setMailboxOpen] = useState(false);
  const [lifeEventFilter, setLifeEventFilter] = useState(null);
  const [chatSeed, setChatSeed] = useState(null);

  const [registeredIds, setRegisteredIds] = useState(["111-11-1111"]);
  const [savedAccount, setSavedAccount] = useState(null);
  const [account, setAccount] = useState(null);

  const [pendingDocs, setPendingDocs] = useState(INITIAL_PENDING_DOCS);
  const [signedDocs, setSignedDocs] = useState([]);

  function goToLifeEvent(le) {
    setLifeEventFilter({ title: t[le.key], ids: le.ids });
    setView("services");
  }

  function openChatWith(seed) {
    setChatSeed(seed);
    setChatOpen(true);
  }

  function createAccount(data) {
    const cleanId = data.idNumber.trim();
    if (registeredIds.includes(cleanId)) {
      return { error: t.acc_error_exists };
    }
    const newAccount = {
      name: data.name.trim(), idNumber: cleanId, dob: data.dob, email: data.email.trim(),
      password: data.password, tier: "bronze", memberSince: new Date().getFullYear(),
    };
    setRegisteredIds((prev) => [...prev, cleanId]);
    setSavedAccount(newAccount);
    setAccount(newAccount);
    return { error: null };
  }

  function signIn(data) {
    const cleanId = data.idNumber.trim();
    if (savedAccount && savedAccount.idNumber === cleanId && savedAccount.password === data.password) {
      setAccount(savedAccount);
      return { error: null };
    }
    return { error: t.acc_error_notfound };
  }

  function demoLogin() {
    if (!registeredIds.includes(DEMO_ACCOUNT.idNumber)) {
      setRegisteredIds((prev) => [...prev, DEMO_ACCOUNT.idNumber]);
    }
    setSavedAccount(DEMO_ACCOUNT);
    setAccount(DEMO_ACCOUNT);
  }

  function logout() {
    setAccount(null);
  }

  function upgradeTier(newTier) {
    setAccount((prev) => (prev ? { ...prev, tier: newTier } : prev));
    setSavedAccount((prev) => (prev ? { ...prev, tier: newTier } : prev));
  }

  return (
    <div className={`civicai-root ${highContrast ? "high-contrast" : ""}`} style={{ fontSize: `${fontScale}rem` }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@500;600&display=swap');

        .civicai-root {
          --paper: #EEEAE0;
          --paper-raised: #F7F4EC;
          --ink: #1C2B45;
          --ink-soft: #47597c;
          --marigold: #D98A2B;
          --brick: #AE4632;
          --moss: #2E6B57;
          --line: #D2CBB8;
          --charcoal: #23262B;
          font-family: 'IBM Plex Sans', sans-serif;
          color: var(--charcoal);
          background: var(--paper);
          min-height: 640px;
          border-radius: 14px;
          overflow: hidden;
          display: flex;
          position: relative;
          box-shadow: 0 1px 0 var(--line) inset;
        }
        .civicai-root.high-contrast {
          --paper: #000000;
          --paper-raised: #111318;
          --ink: #FFFFFF;
          --ink-soft: #E4E4E4;
          --marigold: #FFD166;
          --brick: #FF8A73;
          --moss: #6BE6A6;
          --line: #6A6A6A;
          --charcoal: #FFFFFF;
        }
        .civicai-root * { box-sizing: border-box; }
        .civicai-root h1, .civicai-root h2, .civicai-root h3 {
          font-family: 'Space Grotesk', sans-serif; margin: 0; color: var(--ink);
        }
        .eyebrow {
          font-family: 'IBM Plex Mono', monospace; font-size: 0.7rem; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--ink-soft); font-weight: 600;
        }

        /* Sidebar */
        .sidebar {
          width: 220px; flex-shrink: 0; background: var(--ink); color: #EDE7D8;
          display: flex; flex-direction: column; padding: 20px 14px; overflow-y: auto;
        }
        .high-contrast .sidebar { background: #0A0A0A; color: #fff; }
        .brand { display: flex; align-items: baseline; gap: 8px; padding: 4px 8px 6px; }
        .brand-mark { font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 1.15rem; color: #fff; }
        .tagline { font-size: 0.68rem; color: #B9C3D8; padding: 0 8px 18px; line-height: 1.3; }
        .nav-item {
          display: flex; align-items: center; gap: 10px; padding: 10px 12px; border-radius: 8px;
          font-size: 0.85rem; font-weight: 500; color: #cfd7e6; cursor: pointer; margin-bottom: 2px;
          transition: background 0.15s ease, color 0.15s ease; border: none; background: none; text-align: left; width: 100%;
        }
        .nav-item:hover { background: rgba(255,255,255,0.06); color: #fff; }
        .nav-item.active { background: var(--marigold); color: #1C2B45; font-weight: 600; }
        .sidebar-footer { margin-top: auto; padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.12); }
        .util-row { display: flex; align-items: center; gap: 8px; padding: 8px 10px; font-size: 0.72rem; color: #B9C3D8; }
        .lang-pills { display: flex; gap: 4px; }
        .lang-pill {
          font-family: 'IBM Plex Mono', monospace; font-size: 0.68rem; padding: 3px 7px; border-radius: 5px;
          border: 1px solid rgba(255,255,255,0.2); background: transparent; color: #cfd7e6; cursor: pointer; font-weight: 600;
        }
        .lang-pill.active { background: #EDE7D8; color: var(--ink); border-color: #EDE7D8; }

        /* Top bar */
        .top-bar { display: flex; justify-content: flex-end; align-items: center; gap: 10px; margin-bottom: 18px; position: relative; }
        .tier-pill {
          display: flex; align-items: center; gap: 6px; font-size: 0.74rem; font-weight: 600; padding: 6px 12px;
          border-radius: 999px; border: 1px solid var(--line); background: var(--paper-raised); color: var(--ink);
          cursor: pointer;
        }
        .tier-dot { width: 8px; height: 8px; border-radius: 50%; }
        .icon-btn {
          position: relative; width: 34px; height: 34px; border-radius: 9px; border: 1px solid var(--line);
          background: var(--paper-raised); color: var(--ink); cursor: pointer; display: flex; align-items: center; justify-content: center;
        }
        .badge-dot { position: absolute; top: -4px; right: -4px; width: 9px; height: 9px; border-radius: 50%; background: var(--brick); border: 1.5px solid var(--paper); }
        .mailbox-panel, .a11y-panel {
          position: absolute; top: 42px; right: 0; width: 320px; background: #fff; border: 1px solid var(--line);
          border-radius: 10px; box-shadow: 0 10px 28px rgba(0,0,0,0.15); z-index: 20; overflow: hidden;
        }
        .high-contrast .mailbox-panel, .high-contrast .a11y-panel { background: #111318; }
        .mailbox-head, .a11y-head { padding: 12px 14px; border-bottom: 1px solid var(--line); }
        .mailbox-head .sub, .a11y-head .sub { font-size: 0.7rem; color: var(--ink-soft); margin-top: 2px; }
        .mailbox-item { padding: 11px 14px; border-bottom: 1px dashed var(--line); font-size: 0.78rem; }
        .mailbox-item:last-child { border-bottom: none; }
        .mailbox-item .mtitle { font-weight: 600; color: var(--ink); margin-bottom: 2px; }
        .mailbox-item .mbody { color: var(--ink-soft); line-height: 1.4; }

        /* Accessibility panel */
        .a11y-body { padding: 6px 14px 14px; }
        .a11y-row { display: flex; align-items: center; justify-content: space-between; padding: 10px 0; border-bottom: 1px dashed var(--line); font-size: 0.82rem; color: var(--ink); }
        .a11y-row:last-child { border-bottom: none; }
        .a11y-row-label { font-weight: 600; }
        .a11y-row-desc { font-size: 0.72rem; color: var(--ink-soft); margin-top: 2px; max-width: 210px; }
        .size-btn {
          width: 24px; height: 24px; border-radius: 5px; border: 1px solid var(--line);
          background: var(--paper); color: var(--ink); cursor: pointer; font-family: 'IBM Plex Mono', monospace; font-size: 0.72rem;
        }
        .toggle-switch { width: 36px; height: 20px; border-radius: 999px; background: var(--line); position: relative; cursor: pointer; border: none; padding: 0; flex-shrink: 0; }
        .toggle-switch.on { background: var(--moss); }
        .toggle-knob { position: absolute; top: 2px; left: 2px; width: 16px; height: 16px; border-radius: 50%; background: #fff; transition: left 0.15s ease; display: block; }
        .toggle-switch.on .toggle-knob { left: 18px; }

        /* Dashboard */
        .no-account-banner {
          display: flex; align-items: center; gap: 12px; flex-wrap: wrap;
          background: #FBF1DD; border: 1px dashed var(--marigold); border-radius: 10px;
          padding: 14px 18px; margin-bottom: 22px; font-size: 0.84rem; color: var(--ink);
        }
        .high-contrast .no-account-banner { background: #1a1400; }
        .no-account-banner .btn { margin-left: auto; }
        .stat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin: 0 0 26px; }
        .stat-card {
          background: var(--paper-raised); border: 1px solid var(--line); border-radius: 10px;
          padding: 14px 16px; display: flex; align-items: center; gap: 12px;
        }
        .stat-icon { color: var(--marigold); flex-shrink: 0; }
        .stat-value { font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 1.5rem; color: var(--ink); line-height: 1; }
        .stat-label { font-size: 0.72rem; color: var(--ink-soft); margin-top: 2px; }

        .qa-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 26px; }
        .qa-card {
          background: var(--paper-raised); border: 1px solid var(--line); border-radius: 10px; padding: 16px;
          cursor: pointer; transition: transform 0.12s ease, border-color 0.12s ease; text-align: left;
        }
        .qa-card:hover { transform: translateY(-2px); border-color: var(--marigold); }
        .qa-card svg { color: var(--marigold); margin-bottom: 8px; }
        .qa-card .qa-label { font-weight: 600; font-size: 0.85rem; color: var(--ink); }

        .suggest-row { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px; margin-bottom: 26px; }
        .suggest-chip {
          font-size: 0.78rem; padding: 7px 12px; border-radius: 999px; border: 1px dashed var(--line);
          background: var(--paper-raised); cursor: pointer; color: var(--ink-soft);
        }
        .suggest-chip:hover { border-color: var(--marigold); color: var(--ink); }

        .section-head { margin-bottom: 4px; font-size: 0.95rem; }
        .section-sub { font-size: 0.78rem; color: var(--ink-soft); margin-bottom: 12px; max-width: 560px; }
        .le-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
        .le-card {
          background: var(--paper-raised); border: 1px solid var(--line); border-radius: 10px; padding: 14px 10px;
          text-align: center; cursor: pointer; transition: transform 0.12s ease, border-color 0.12s ease;
        }
        .le-card:hover { transform: translateY(-2px); border-color: var(--marigold); }
        .le-card svg { color: var(--ink); margin-bottom: 8px; }
        .le-card .le-label { font-size: 0.76rem; font-weight: 600; color: var(--ink); line-height: 1.25; }

        /* Stamp */
        .stamp {
          display: inline-flex; align-items: center; font-family: 'IBM Plex Mono', monospace;
          font-size: 0.66rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase;
          border: 1.5px dashed var(--stamp-color); color: var(--stamp-color); padding: 3px 9px;
          border-radius: 5px; transform: rotate(-2deg); background: rgba(255,255,255,0.4);
        }

        /* Form */
        .form-card { background: var(--paper-raised); border: 1px solid var(--line); border-radius: 12px; padding: 22px; max-width: 620px; }
        .field { margin-bottom: 16px; }
        .field label { display: block; font-size: 0.78rem; font-weight: 600; color: var(--ink); margin-bottom: 6px; }
        .field input, .field textarea, .field select {
          width: 100%; padding: 10px 12px; border: 1px solid var(--line); border-radius: 7px;
          background: #fff; font-family: 'IBM Plex Sans', sans-serif; font-size: 0.86rem; color: var(--charcoal);
        }
        .high-contrast .field input, .high-contrast .field textarea, .high-contrast .field select { background: #1a1a1a; color: #fff; }
        .field textarea { resize: vertical; min-height: 80px; }
        .row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .btn {
          font-family: 'IBM Plex Sans', sans-serif; font-weight: 600; font-size: 0.84rem; padding: 10px 18px;
          border-radius: 8px; border: none; cursor: pointer; display: inline-flex; align-items: center; gap: 7px;
        }
        .btn-primary { background: var(--ink); color: #fff; }
        .high-contrast .btn-primary { background: var(--marigold); color: #000; }
        .btn-primary:hover { background: #14213a; }
        .btn-ghost { background: transparent; border: 1px solid var(--line); color: var(--ink); }
        .btn-ghost:hover { border-color: var(--marigold); }
        .btn:disabled { opacity: 0.55; cursor: default; }
        .toast {
          margin-top: 14px; padding: 10px 14px; border-radius: 8px; background: #E4EEE9; border: 1px solid var(--moss);
          color: var(--moss); font-size: 0.82rem; font-weight: 600;
        }
        .toast-error {
          margin-top: 14px; padding: 10px 14px; border-radius: 8px; background: #F7E4E0; border: 1px solid var(--brick);
          color: var(--brick); font-size: 0.82rem; font-weight: 600;
        }

        /* Track */
        .filter-row { display: flex; gap: 6px; margin-bottom: 18px; flex-wrap: wrap; }
        .filter-pill {
          font-size: 0.76rem; padding: 6px 13px; border-radius: 999px; border: 1px solid var(--line);
          background: var(--paper-raised); cursor: pointer; color: var(--ink-soft); font-weight: 500;
        }
        .filter-pill.active { background: var(--ink); color: #fff; border-color: var(--ink); }
        .complaint-card {
          background: var(--paper-raised); border: 1px solid var(--line); border-radius: 10px;
          padding: 16px 18px; margin-bottom: 12px;
        }
        .complaint-top { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; }
        .ticket-id { font-family: 'IBM Plex Mono', monospace; font-size: 0.72rem; color: var(--ink-soft); }
        .complaint-title { font-weight: 600; color: var(--ink); margin: 3px 0 2px; }
        .complaint-meta { font-size: 0.76rem; color: var(--ink-soft); }
        .tl { margin-top: 12px; padding-top: 12px; border-top: 1px dashed var(--line); display: flex; gap: 18px; flex-wrap: wrap; }
        .tl-step { font-size: 0.74rem; color: var(--ink-soft); display: flex; align-items: center; gap: 6px; }
        .tl-step svg { color: var(--moss); width: 13px; height: 13px; }

        /* Services */
        .search-bar { display: flex; align-items: center; gap: 8px; background: #fff; border: 1px solid var(--line);
          border-radius: 9px; padding: 10px 14px; margin-bottom: 16px; max-width: 480px; }
        .high-contrast .search-bar { background: #1a1a1a; }
        .search-bar input { border: none; outline: none; font-size: 0.86rem; flex: 1; font-family: 'IBM Plex Sans', sans-serif; background: transparent; color: var(--charcoal); }
        .filter-banner {
          display: flex; align-items: center; gap: 10px; background: #FBF1DD; border: 1px dashed var(--marigold);
          border-radius: 9px; padding: 9px 14px; margin-bottom: 16px; font-size: 0.8rem; color: var(--ink);
        }
        .high-contrast .filter-banner { background: #1a1400; }
        .filter-banner button { margin-left: auto; background: none; border: none; color: var(--marigold); font-weight: 700; cursor: pointer; font-size: 0.76rem; }
        .service-card { background: var(--paper-raised); border: 1px solid var(--line); border-radius: 10px; padding: 16px 18px; margin-bottom: 12px; }
        .service-top { display: flex; justify-content: space-between; align-items: flex-start; }
        .service-dept { font-size: 0.76rem; color: var(--ink-soft); margin-top: 1px; }
        .service-meta { display: flex; gap: 16px; margin: 10px 0; font-size: 0.76rem; color: var(--ink-soft); flex-wrap: wrap; }
        .service-meta b { color: var(--ink); font-weight: 600; }
        .lock-tag { display: inline-flex; align-items: center; gap: 4px; color: var(--brick); font-weight: 600; }
        .reqs { list-style: none; padding: 0; margin: 8px 0 12px; font-size: 0.8rem; }
        .reqs li { padding: 3px 0 3px 16px; position: relative; color: var(--charcoal); }
        .reqs li:before { content: '—'; position: absolute; left: 0; color: var(--marigold); }
        .link-btn { background: none; border: none; color: var(--marigold); font-weight: 600; font-size: 0.8rem; cursor: pointer; padding: 0; display: inline-flex; gap: 5px; align-items: center; }

        /* Account */
        .tabs { display: flex; gap: 6px; }
        .tab {
          font-family: 'IBM Plex Sans', sans-serif; font-size: 0.82rem; font-weight: 600; padding: 10px 18px;
          border-radius: 8px 8px 0 0; border: 1px solid var(--line); border-bottom: none; background: var(--paper);
          color: var(--ink-soft); cursor: pointer;
        }
        .tab.active { background: var(--paper-raised); color: var(--ink); }
        .account-card {
          background: var(--paper-raised); border: 1px solid var(--line); border-radius: 12px; padding: 18px 22px;
          max-width: 560px; margin-bottom: 24px;
        }
        .account-row { display: flex; justify-content: space-between; gap: 12px; padding: 9px 0; border-bottom: 1px dashed var(--line); font-size: 0.86rem; }
        .account-row:last-child { border-bottom: none; }
        .account-label { color: var(--ink-soft); font-weight: 600; }
        .verify-list { display: flex; flex-direction: column; gap: 10px; margin-bottom: 18px; max-width: 560px; }
        .verify-step { display: flex; align-items: center; gap: 10px; padding: 12px 16px; border-radius: 10px;
          border: 1px solid var(--line); background: var(--paper-raised); font-size: 0.86rem; color: var(--ink-soft); }
        .verify-step svg { color: var(--line); flex-shrink: 0; }
        .verify-step.done { border-color: var(--moss); color: var(--ink); }
        .verify-step.done svg { color: var(--moss); }
        .verify-step-label { flex: 1; font-weight: 600; }
        .verify-upgrade { margin-bottom: 24px; max-width: 560px; }
        .verify-upgrade-desc { font-size: 0.78rem; color: var(--ink-soft); margin: 8px 0 12px; }
        .demo-link { margin-top: 16px; text-align: center; }
        .demo-link-hint { font-size: 0.72rem; color: var(--ink-soft); margin-top: 4px; }

        /* Document signing */
        .locked-banner {
          display: flex; align-items: center; gap: 10px; background: #FBF1DD; border: 1px dashed var(--marigold);
          border-radius: 10px; padding: 14px 18px; margin-bottom: 20px; font-size: 0.85rem; color: var(--ink); flex-wrap: wrap;
        }
        .high-contrast .locked-banner { background: #1a1400; }
        .locked-banner .btn { margin-left: auto; }
        .upload-row { display: flex; gap: 10px; max-width: 560px; margin-bottom: 22px; }
        .upload-row input {
          flex: 1; padding: 10px 12px; border: 1px solid var(--line); border-radius: 7px; font-size: 0.86rem;
          font-family: 'IBM Plex Sans', sans-serif; background: #fff; color: var(--charcoal);
        }
        .high-contrast .upload-row input { background: #1a1a1a; }
        .doc-card { background: var(--paper-raised); border: 1px solid var(--line); border-radius: 10px; padding: 14px 18px; margin-bottom: 10px; max-width: 640px; }
        .doc-top { display: flex; justify-content: space-between; align-items: center; gap: 12px; font-size: 0.88rem; font-weight: 600; color: var(--ink); }
        .doc-top .doc-name { display: flex; align-items: center; gap: 8px; }
        .doc-top .doc-name svg { color: var(--ink-soft); flex-shrink: 0; }
        .cert-box {
          margin-top: 10px; padding-top: 10px; border-top: 1px dashed var(--line);
          display: flex; flex-direction: column; gap: 4px; font-size: 0.74rem; color: var(--ink-soft);
          font-family: 'IBM Plex Mono', monospace;
        }
        .cert-box .cert-line { display: flex; align-items: center; gap: 6px; }

        /* Public data */
        .pd-row { display: flex; align-items: center; gap: 14px; margin-bottom: 12px; font-size: 0.82rem; }
        .pd-cat { width: 180px; flex-shrink: 0; font-weight: 600; color: var(--ink); }
        .pd-bar-track { flex: 1; height: 10px; border-radius: 6px; background: var(--paper); border: 1px solid var(--line); overflow: hidden; }
        .pd-bar-fill { height: 100%; background: var(--moss); }
        .pd-meta { width: 190px; flex-shrink: 0; color: var(--ink-soft); font-size: 0.76rem; text-align: right; }
        .pd-legend { display: flex; gap: 16px; font-size: 0.72rem; color: var(--ink-soft); margin: 6px 0 18px; }

        /* News */
        .news-card { background: var(--paper-raised); border: 1px solid var(--line); border-radius: 10px; padding: 16px 18px; margin-bottom: 14px; max-width: 640px; }
        .news-date { font-family: 'IBM Plex Mono', monospace; font-size: 0.7rem; color: var(--ink-soft); margin-bottom: 4px; }
        .news-title { font-size: 0.95rem; margin-bottom: 6px; }
        .news-excerpt { font-size: 0.84rem; color: var(--charcoal); line-height: 1.5; margin-bottom: 10px; }

        /* Chat drawer */
        .fab {
          position: absolute; bottom: 22px; right: 26px; background: var(--marigold); color: #1C2B45;
          border: none; border-radius: 999px; padding: 12px 18px; display: flex; align-items: center; gap: 8px;
          font-weight: 700; font-size: 0.84rem; cursor: pointer; box-shadow: 0 6px 18px rgba(0,0,0,0.18); z-index: 5;
        }
        .fab:hover { background: #c67e26; }
        .drawer {
          position: absolute; top: 0; right: 0; bottom: 0; width: 380px; background: var(--paper-raised);
          border-left: 1px solid var(--line); display: flex; flex-direction: column; z-index: 10;
          box-shadow: -8px 0 24px rgba(0,0,0,0.12); transition: transform 0.22s ease;
        }
        .drawer-head { background: var(--ink); color: #fff; padding: 16px 18px; display: flex; justify-content: space-between; align-items: flex-start; }
        .drawer-head h3 { color: #fff; font-size: 1rem; }
        .drawer-head .sub { font-size: 0.72rem; color: #B9C3D8; margin-top: 3px; }
        .drawer-close { background: none; border: none; color: #cfd7e6; cursor: pointer; }
        .drawer-body { flex: 1; overflow-y: auto; padding: 16px; display: flex; flex-direction: column; gap: 10px; }
        .msg { max-width: 88%; padding: 9px 13px; border-radius: 10px; font-size: 0.84rem; line-height: 1.45; }
        .msg-text { white-space: pre-wrap; }
        .msg.user { align-self: flex-end; background: var(--ink); color: #fff; }
        .msg.ai { align-self: flex-start; background: #fff; border: 1px solid var(--line); color: var(--charcoal); }
        .high-contrast .msg.ai { background: #1a1a1a; }
        .msg.ai.thinking { color: var(--ink-soft); font-style: italic; }
        .msg-speak { margin-top: 6px; background: none; border: none; color: var(--ink-soft); font-size: 0.7rem; cursor: pointer; display: inline-flex; align-items: center; gap: 4px; padding: 0; }
        .msg-speak:hover { color: var(--marigold); }
        .empty-chat { color: var(--ink-soft); font-size: 0.84rem; text-align: center; margin-top: 30px; padding: 0 20px; }
        .empty-chat svg { color: var(--marigold); margin-bottom: 8px; }
        .drawer-input { display: flex; gap: 8px; padding: 12px; border-top: 1px solid var(--line); }
        .drawer-input input {
          flex: 1; border: 1px solid var(--line); border-radius: 8px; padding: 9px 12px; font-size: 0.84rem;
          font-family: 'IBM Plex Sans', sans-serif; background: #fff; color: var(--charcoal);
        }
        .high-contrast .drawer-input input { background: #1a1a1a; }
        .drawer-input button { background: var(--marigold); border: none; border-radius: 8px; width: 38px; color: #1C2B45; cursor: pointer; display:flex; align-items:center; justify-content:center; flex-shrink: 0; }
        .drawer-input button:disabled { opacity: 0.5; }
        .drawer-input .mic-btn.listening { background: var(--brick); color: #fff; }
      `}</style>

      {/* SIDEBAR */}
      <div className="sidebar">
        <div className="brand">
          <span className="brand-mark">{t.brand}</span>
        </div>
        <div className="tagline">{t.tagline}</div>

        <button className={`nav-item ${view === "dashboard" ? "active" : ""}`} onClick={() => setView("dashboard")}>
          <Home size={16} /> {t.nav_dashboard}
        </button>
        <button className={`nav-item ${view === "report" ? "active" : ""}`} onClick={() => setView("report")}>
          <FileWarning size={16} /> {t.nav_report}
        </button>
        <button className={`nav-item ${view === "track" ? "active" : ""}`} onClick={() => setView("track")}>
          <ListChecks size={16} /> {t.nav_track}
        </button>
        <button className={`nav-item ${view === "services" ? "active" : ""}`} onClick={() => { setLifeEventFilter(null); setView("services"); }}>
          <LayoutGrid size={16} /> {t.nav_services}
        </button>
        <button className={`nav-item ${view === "sign" ? "active" : ""}`} onClick={() => setView("sign")}>
          <PenTool size={16} /> {t.nav_sign}
        </button>
        <button className={`nav-item ${view === "publicdata" ? "active" : ""}`} onClick={() => setView("publicdata")}>
          <BarChart3 size={16} /> {t.nav_public_data}
        </button>
        <button className={`nav-item ${view === "news" ? "active" : ""}`} onClick={() => setView("news")}>
          <Newspaper size={16} /> {t.nav_news}
        </button>
        <button className={`nav-item ${view === "account" ? "active" : ""}`} onClick={() => setView("account")}>
          <User size={16} /> {t.nav_account}
        </button>

        <div className="sidebar-footer">
          <div className="util-row">
            <Languages size={13} />
            <div className="lang-pills">
              {["en", "pt", "es"].map((l) => (
                <button key={l} className={`lang-pill ${lang === l ? "active" : ""}`} onClick={() => setLang(l)}>
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div className="main">
        <TopBar
          t={t} account={account} setView={setView}
          mailboxOpen={mailboxOpen} setMailboxOpen={setMailboxOpen}
          a11yOpen={a11yOpen} setA11yOpen={setA11yOpen}
          fontScale={fontScale} setFontScale={setFontScale}
          highContrast={highContrast} setHighContrast={setHighContrast}
          simpleLanguage={simpleLanguage} setSimpleLanguage={setSimpleLanguage}
        />

        {view === "dashboard" && (
          <Dashboard t={t} account={account} complaints={complaints} setView={setView} setChatOpen={setChatOpen} goToLifeEvent={goToLifeEvent} />
        )}
        {view === "report" && <ReportForm t={t} lang={lang} setComplaints={setComplaints} />}
        {view === "track" && (
          <TrackComplaints t={t} lang={lang} complaints={complaints} statusFilter={statusFilter} setStatusFilter={setStatusFilter} />
        )}
        {view === "services" && (
          <Services
            t={t} search={search} setSearch={setSearch} openChatWith={openChatWith}
            account={account} lifeEventFilter={lifeEventFilter} setLifeEventFilter={setLifeEventFilter}
          />
        )}
        {view === "publicdata" && <PublicData t={t} lang={lang} />}
        {view === "news" && <News t={t} lang={lang} openChatWith={openChatWith} />}
        {view === "account" && (
          <AccountSection
            t={t} account={account}
            onCreate={createAccount} onSignIn={signIn} onLogout={logout} onUpgrade={upgradeTier} onDemoLogin={demoLogin}
          />
        )}
        {view === "sign" && (
          <SignDocuments
            t={t} account={account} setView={setView}
            pendingDocs={pendingDocs} setPendingDocs={setPendingDocs}
            signedDocs={signedDocs} setSignedDocs={setSignedDocs}
          />
        )}
      </div>

      {/* CHAT FAB + DRAWER */}
      {!chatOpen && (
        <button className="fab" onClick={() => { setChatSeed(null); setChatOpen(true); }}>
          <MessageCircle size={17} /> {t.open_assistant}
        </button>
      )}
      {chatOpen && (
        <ChatDrawer t={t} lang={lang} seed={chatSeed} simpleLanguage={simpleLanguage} onClose={() => setChatOpen(false)} />
      )}
    </div>
  );
}

/* ---------------------------------------------------------------
   TOP BAR
--------------------------------------------------------------- */

function TopBar({
  t, account, setView, mailboxOpen, setMailboxOpen, a11yOpen, setA11yOpen,
  fontScale, setFontScale, highContrast, setHighContrast, simpleLanguage, setSimpleLanguage,
}) {
  const tierColor = !account ? "var(--line)" : account.tier === "gold" ? "var(--marigold)" : account.tier === "silver" ? "var(--ink-soft)" : "var(--brick)";
  const mailbox = [
    { title: t.mb1_title, body: t.mb1_body },
    { title: t.mb2_title, body: t.mb2_body },
    { title: t.mb3_title, body: t.mb3_body },
  ];

  return (
    <div className="top-bar">
      <button className="tier-pill" onClick={() => setView("account")}>
        <span className="tier-dot" style={{ background: tierColor }} />
        <ShieldCheck size={13} />
        {account ? `${t.account_tier}: ${t[`tier_${account.tier}`]}` : t.sign_in_pill}
      </button>

      <button className="icon-btn" onClick={() => { setA11yOpen((o) => !o); setMailboxOpen(false); }}>
        <Accessibility size={16} />
      </button>
      {a11yOpen && (
        <div className="a11y-panel">
          <div className="a11y-head">
            <h3 style={{ fontSize: "0.86rem" }}>{t.a11y_title}</h3>
          </div>
          <div className="a11y-body">
            <div className="a11y-row">
              <span className="a11y-row-label">{t.a11y_text_size}</span>
              <div style={{ display: "flex", gap: 6 }}>
                <button className="size-btn" onClick={() => setFontScale((s) => Math.max(0.85, s - 0.1))}>A-</button>
                <button className="size-btn" onClick={() => setFontScale((s) => Math.min(1.3, s + 0.1))}>A+</button>
              </div>
            </div>
            <div className="a11y-row">
              <span className="a11y-row-label"><Contrast size={13} style={{ verticalAlign: -2, marginRight: 5 }} />{t.a11y_high_contrast}</span>
              <ToggleSwitch on={highContrast} onToggle={() => setHighContrast((v) => !v)} />
            </div>
            <div className="a11y-row">
              <div>
                <div className="a11y-row-label">{t.a11y_simple_language}</div>
                <div className="a11y-row-desc">{t.a11y_simple_language_desc}</div>
              </div>
              <ToggleSwitch on={simpleLanguage} onToggle={() => setSimpleLanguage((v) => !v)} />
            </div>
          </div>
        </div>
      )}

      <button className="icon-btn" onClick={() => { setMailboxOpen((o) => !o); setA11yOpen(false); }}>
        <Bell size={16} />
        {account && <span className="badge-dot" />}
      </button>
      {mailboxOpen && (
        <div className="mailbox-panel">
          <div className="mailbox-head">
            <h3 style={{ fontSize: "0.86rem" }}>{t.mailbox_title}</h3>
            <div className="sub">{t.mailbox_sub}</div>
          </div>
          {!account && <div className="mailbox-item">{t.mailbox_locked}</div>}
          {account && mailbox.map((m, i) => (
            <div key={i} className="mailbox-item">
              <div className="mtitle">{m.title}</div>
              <div className="mbody">{m.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ---------------------------------------------------------------
   DASHBOARD
--------------------------------------------------------------- */

function Dashboard({ t, account, complaints, setView, setChatOpen, goToLifeEvent }) {
  const open = complaints.filter((c) => c.status !== "resolved").length;
  const resolved = complaints.filter((c) => c.status === "resolved").length;

  return (
    <>
      <div className="page-head" style={{ marginBottom: 22 }}>
        <div className="eyebrow">{t.brand}</div>
        <h1>{account ? `${t.welcome}, ${account.name.split(" ")[0]}` : t.welcome}</h1>
        <div className="sub">{account ? t.welcome_sub : t.welcome_guest_sub}</div>
      </div>

      {!account && (
        <div className="no-account-banner">
          <ShieldCheck size={18} />
          {t.no_account_banner}
          <button className="btn btn-primary" onClick={() => setView("account")}>{t.no_account_cta}</button>
        </div>
      )}

      <div className="stat-grid">
        <StatCard value={open} label={t.stat_open} icon={<Clock size={22} />} />
        <StatCard value={resolved} label={t.stat_resolved} icon={<CheckCircle2 size={22} />} />
        <StatCard value={SERVICES.length} label={t.stat_services} icon={<LayoutGrid size={22} />} />
      </div>

      <h3 className="section-head">{t.life_events_title}</h3>
      <div className="section-sub">{t.life_events_sub}</div>
      <div className="le-grid" style={{ marginBottom: 28 }}>
        {LIFE_EVENTS.map((le) => {
          const Icon = le.icon;
          return (
            <button key={le.id} className="le-card" onClick={() => goToLifeEvent(le)}>
              <Icon size={20} />
              <div className="le-label">{t[le.key]}</div>
            </button>
          );
        })}
      </div>

      <h3 style={{ marginBottom: 12, fontSize: "0.95rem" }}>{t.quick_actions}</h3>
      <div className="qa-grid">
        <button className="qa-card" onClick={() => setView("report")}>
          <FileWarning size={20} /><div className="qa-label">{t.qa_report}</div>
        </button>
        <button className="qa-card" onClick={() => setView("track")}>
          <ListChecks size={20} /><div className="qa-label">{t.qa_track}</div>
        </button>
        <button className="qa-card" onClick={() => setView("services")}>
          <LayoutGrid size={20} /><div className="qa-label">{t.qa_services}</div>
        </button>
        <button className="qa-card" onClick={() => setChatOpen(true)}>
          <Sparkles size={20} /><div className="qa-label">{t.qa_ask}</div>
        </button>
      </div>

      <h3 style={{ marginBottom: 8, fontSize: "0.95rem" }}>{t.ask_suggestions}</h3>
      <div className="suggest-row">
        {[t.s1, t.s2, t.s3].map((s, i) => (
          <button key={i} className="suggest-chip" onClick={() => setChatOpen(true)}>{s}</button>
        ))}
      </div>
    </>
  );
}

/* ---------------------------------------------------------------
   REPORT FORM
--------------------------------------------------------------- */

function ReportForm({ t, lang, setComplaints }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [location, setLocation] = useState("");
  const [suggesting, setSuggesting] = useState(false);
  const [ticket, setTicket] = useState(null);

  async function suggestCategory() {
    if (!desc.trim()) return;
    setSuggesting(true);
    try {
      const sys = `You are a civic issue triage assistant. Given a citizen's issue description, respond with ONLY one category from this exact list, nothing else: ${CATEGORIES.join(", ")}.`;
      const result = await askClaude(sys, [{ role: "user", content: desc }]);
      const match = CATEGORIES.find((c) => result.toLowerCase().includes(c.toLowerCase().split(" ")[0].toLowerCase()));
      if (match) setCategory(match);
    } catch (e) {
      console.error(e);
    }
    setSuggesting(false);
  }

  function submit(e) {
    e.preventDefault();
    if (!title.trim() || !desc.trim()) return;
    const id = "CV-" + Math.floor(10000 + Math.random() * 89999);
    const localeMap = { en: "en-US", pt: "pt-BR", es: "es-ES" };
    const today = new Date().toLocaleDateString(localeMap[lang] || "en-US", { month: "short", day: "2-digit", year: "numeric" });
    setComplaints((prev) => [
      { id, title, category, status: "submitted", date: today, timeline: [{ label: "Report filed", date: today }] },
      ...prev,
    ]);
    setTicket(id);
    setTitle(""); setDesc(""); setLocation(""); setCategory(CATEGORIES[0]);
  }

  return (
    <>
      <div className="page-head" style={{ marginBottom: 22 }}>
        <div className="eyebrow">{t.nav_report}</div>
        <h1>{t.report_title}</h1>
        <div className="sub">{t.report_sub}</div>
      </div>

      <form className="form-card" onSubmit={submit}>
        <div className="field">
          <label>{t.f_title}</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder={t.f_title_ph} required />
        </div>
        <div className="field">
          <label>{t.f_desc}</label>
          <textarea value={desc} onChange={(e) => setDesc(e.target.value)} placeholder={t.f_desc_ph} required />
          <button type="button" className="link-btn" style={{ marginTop: 8 }} onClick={suggestCategory} disabled={suggesting || !desc.trim()}>
            <Sparkles size={14} /> {suggesting ? t.chat_thinking : t.f_suggest}
          </button>
        </div>
        <div className="row-2">
          <div className="field">
            <label>{t.f_category}</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              {CATEGORIES.map((c) => <option key={c} value={c}>{CATEGORY_LABELS[lang][c] || c}</option>)}
            </select>
          </div>
          <div className="field">
            <label>{t.f_location}</label>
            <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder={t.f_location_ph} />
          </div>
        </div>
        <div className="field">
          <label>{t.f_photo}</label>
          <button type="button" className="btn btn-ghost"><Camera size={15} /> {t.f_photo}</button>
        </div>
        <button className="btn btn-primary" type="submit"><Plus size={15} /> {t.f_submit}</button>

        {ticket && <div className="toast">{t.submitted_toast}: {ticket}</div>}
      </form>
    </>
  );
}

/* ---------------------------------------------------------------
   TRACK COMPLAINTS
--------------------------------------------------------------- */

function TrackComplaints({ t, lang, complaints, statusFilter, setStatusFilter }) {
  const filters = ["all", "submitted", "review", "progress", "urgent", "resolved"];
  const visible = statusFilter === "all" ? complaints : complaints.filter((c) => c.status === statusFilter);

  return (
    <>
      <div className="page-head" style={{ marginBottom: 22 }}>
        <div className="eyebrow">{t.nav_track}</div>
        <h1>{t.track_title}</h1>
        <div className="sub">{t.track_sub}</div>
      </div>

      <div className="filter-row">
        {filters.map((f) => (
          <button key={f} className={`filter-pill ${statusFilter === f ? "active" : ""}`} onClick={() => setStatusFilter(f)}>
            {f === "all" ? t.filter_all : t[STATUS_META[f].key]}
          </button>
        ))}
      </div>

      {visible.length === 0 && <div className="sub">{t.no_complaints}</div>}

      {visible.map((c) => {
        const meta = STATUS_META[c.status];
        return (
          <div key={c.id} className="complaint-card">
            <div className="complaint-top">
              <div>
                <div className="ticket-id">{c.id} · {CATEGORY_LABELS[lang][c.category] || c.category}</div>
                <div className="complaint-title">{c.title}</div>
                <div className="complaint-meta">{c.date}</div>
              </div>
              <Stamp color={meta.color}>{t[meta.key]}</Stamp>
            </div>
            <div className="tl">
              {c.timeline.map((step, i) => (
                <div key={i} className="tl-step"><CheckCircle2 size={13} /> {step.label} · {step.date}</div>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
}

/* ---------------------------------------------------------------
   SERVICES — with verification-level locks and life-event filter
--------------------------------------------------------------- */

function Services({ t, search, setSearch, openChatWith, account, lifeEventFilter, setLifeEventFilter }) {
  const [openId, setOpenId] = useState(null);
  const tierIndex = account ? TIER_ORDER.indexOf(account.tier) : -1;

  let base = SERVICES;
  if (lifeEventFilter) base = base.filter((s) => lifeEventFilter.ids.includes(s.id));
  const filtered = base.filter((s) => s.name.toLowerCase().includes(search.toLowerCase()) || s.dept.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <div className="page-head" style={{ marginBottom: 22 }}>
        <div className="eyebrow">{t.nav_services}</div>
        <h1>{t.services_title}</h1>
        <div className="sub">{t.services_sub}</div>
      </div>

      <div className="search-bar">
        <Search size={16} color="var(--ink-soft)" />
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder={t.search_ph} />
      </div>

      {lifeEventFilter && (
        <div className="filter-banner">
          <MapPin size={14} /> {t.showing_for}: <b>{lifeEventFilter.title}</b>
          <button onClick={() => setLifeEventFilter(null)}>{t.clear_filter} ✕</button>
        </div>
      )}

      {filtered.map((s) => {
        const isOpen = openId === s.id;
        const reqTierIndex = TIER_ORDER.indexOf(s.minTier);
        const locked = tierIndex < reqTierIndex;
        return (
          <div key={s.id} className="service-card">
            <div className="service-top">
              <div>
                <h3 style={{ fontSize: "0.95rem" }}>{s.name}</h3>
                <div className="service-dept">{s.dept}</div>
              </div>
              <button className="link-btn" onClick={() => setOpenId(isOpen ? null : s.id)}>
                <ChevronDown size={16} style={{ transform: isOpen ? "rotate(180deg)" : "none", transition: "transform .15s" }} />
              </button>
            </div>
            <div className="service-meta">
              <div><b>{t.processing_time}:</b> {s.time}</div>
              <div><b>{t.fee}:</b> {s.fee}</div>
              {locked && (
                <div className="lock-tag"><Lock size={12} /> {t.locked_tag} {t[`tier_${s.minTier}`]}</div>
              )}
            </div>
            {isOpen && (
              <>
                <div style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--ink)", marginTop: 6 }}>{t.requirements}</div>
                <ul className="reqs">
                  {s.reqs.map((r, i) => <li key={i}>{r}</li>)}
                </ul>
                {locked ? (
                  <button className="link-btn" onClick={() => openChatWith(t.unlock_cta)}>
                    <Lock size={14} /> {t.unlock_cta} <ArrowRight size={13} />
                  </button>
                ) : (
                  <button className="link-btn" onClick={() => openChatWith(`${t.ask_about}: ${s.name}`)}>
                    <Sparkles size={14} /> {t.ask_about} <ArrowRight size={13} />
                  </button>
                )}
              </>
            )}
          </div>
        );
      })}
    </>
  );
}

/* ---------------------------------------------------------------
   ACCOUNT — single account per national ID, verification levels
--------------------------------------------------------------- */

function AccountSection({ t, account, onCreate, onSignIn, onLogout, onUpgrade, onDemoLogin }) {
  const [tab, setTab] = useState("create");
  const [form, setForm] = useState({ name: "", idNumber: "", dob: "", email: "", password: "", confirm: "" });
  const [signForm, setSignForm] = useState({ idNumber: "", password: "" });
  const [error, setError] = useState("");

  if (account) {
    const tierIdx = TIER_ORDER.indexOf(account.tier);
    return (
      <>
        <div className="page-head" style={{ marginBottom: 22 }}>
          <div className="eyebrow">{t.nav_account}</div>
          <h1>{t.acc_profile_title}</h1>
          <div className="sub">{t.account_sub}</div>
        </div>

        <div className="account-card">
          <div className="account-row"><span className="account-label">{t.acc_full_name}</span><span>{account.name}</span></div>
          <div className="account-row"><span className="account-label">{t.acc_id_number}</span><span>{maskId(account.idNumber)}</span></div>
          <div className="account-row"><span className="account-label">{t.acc_email}</span><span>{account.email}</span></div>
          <div className="account-row"><span className="account-label">{t.acc_member_since}</span><span>{account.memberSince}</span></div>
        </div>

        <h3 className="section-head">{t.acc_verification_level}</h3>
        <div className="verify-list">
          {TIER_ORDER.map((tierName, i) => {
            const Icon = i === 0 ? Mail : i === 1 ? Phone : Fingerprint;
            return (
              <div key={tierName} className={`verify-step ${i <= tierIdx ? "done" : ""}`}>
                <Icon size={16} />
                <div className="verify-step-label">{t[`tier_${tierName}`]}</div>
                {i <= tierIdx && <CheckCircle2 size={16} />}
              </div>
            );
          })}
        </div>

        {tierIdx === 0 && (
          <div className="verify-upgrade">
            <div className="verify-upgrade-desc">{t.acc_upgrade_silver_desc}</div>
            <button className="btn btn-primary" onClick={() => onUpgrade("silver")}>
              <Phone size={15} /> {t.acc_upgrade_silver}
            </button>
          </div>
        )}
        {tierIdx === 1 && (
          <div className="verify-upgrade">
            <div className="verify-upgrade-desc">{t.acc_upgrade_gold_desc}</div>
            <button className="btn btn-primary" onClick={() => onUpgrade("gold")}>
              <Fingerprint size={15} /> {t.acc_upgrade_gold}
            </button>
          </div>
        )}

        <button className="btn btn-ghost" onClick={onLogout}><LogOut size={15} /> {t.acc_logout}</button>
      </>
    );
  }

  function submitCreate(e) {
    e.preventDefault();
    if (form.password !== form.confirm) { setError(t.acc_error_mismatch); return; }
    const res = onCreate(form);
    setError(res.error || "");
  }

  function submitSignIn(e) {
    e.preventDefault();
    const res = onSignIn(signForm);
    setError(res.error || "");
  }

  return (
    <>
      <div className="page-head" style={{ marginBottom: 22 }}>
        <div className="eyebrow">{t.nav_account}</div>
        <h1>{t.account_title}</h1>
        <div className="sub">{t.account_sub}</div>
      </div>

      <div className="tabs">
        <button className={`tab ${tab === "create" ? "active" : ""}`} onClick={() => { setTab("create"); setError(""); }}>{t.acc_tab_create}</button>
        <button className={`tab ${tab === "signin" ? "active" : ""}`} onClick={() => { setTab("signin"); setError(""); }}>{t.acc_tab_signin}</button>
      </div>

      {tab === "create" ? (
        <form className="form-card" style={{ borderTopLeftRadius: 0 }} onSubmit={submitCreate}>
          <div className="field">
            <label>{t.acc_full_name}</label>
            <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder={t.acc_name_ph} required />
          </div>
          <div className="row-2">
            <div className="field">
              <label>{t.acc_id_number}</label>
              <input value={form.idNumber} onChange={(e) => setForm({ ...form, idNumber: e.target.value })} placeholder={t.acc_id_ph} required />
            </div>
            <div className="field">
              <label>{t.acc_dob}</label>
              <input type="date" value={form.dob} onChange={(e) => setForm({ ...form, dob: e.target.value })} required />
            </div>
          </div>
          <div className="field">
            <label>{t.acc_email}</label>
            <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder={t.acc_email_ph} required />
          </div>
          <div className="row-2">
            <div className="field">
              <label>{t.acc_password}</label>
              <input type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} placeholder={t.acc_password_ph} required />
            </div>
            <div className="field">
              <label>{t.acc_confirm_password}</label>
              <input type="password" value={form.confirm} onChange={(e) => setForm({ ...form, confirm: e.target.value })} required />
            </div>
          </div>
          <button className="btn btn-primary" type="submit"><User size={15} /> {t.acc_create_btn}</button>
          {error && <div className="toast-error">{error}</div>}
        </form>
      ) : (
        <form className="form-card" style={{ borderTopLeftRadius: 0 }} onSubmit={submitSignIn}>
          <div className="field">
            <label>{t.acc_id_number}</label>
            <input value={signForm.idNumber} onChange={(e) => setSignForm({ ...signForm, idNumber: e.target.value })} placeholder={t.acc_id_ph} required />
          </div>
          <div className="field">
            <label>{t.acc_password}</label>
            <input type="password" value={signForm.password} onChange={(e) => setSignForm({ ...signForm, password: e.target.value })} placeholder={t.acc_password_ph} required />
          </div>
          <button className="btn btn-primary" type="submit"><User size={15} /> {t.acc_signin_btn}</button>
          {error && <div className="toast-error">{error}</div>}
        </form>
      )}

      <div className="demo-link">
        <button className="link-btn" onClick={onDemoLogin}><Sparkles size={14} /> {t.acc_demo_cta}</button>
        <div className="demo-link-hint">{t.acc_demo_hint}</div>
      </div>
    </>
  );
}

/* ---------------------------------------------------------------
   DOCUMENT SIGNING
--------------------------------------------------------------- */

function SignDocuments({ t, account, setView, pendingDocs, setPendingDocs, signedDocs, setSignedDocs }) {
  const [newDocName, setNewDocName] = useState("");
  const tierIndex = account ? TIER_ORDER.indexOf(account.tier) : -1;
  const requiredTierIndex = TIER_ORDER.indexOf("silver");
  const canSign = tierIndex >= requiredTierIndex;

  if (!account) {
    return (
      <>
        <div className="page-head" style={{ marginBottom: 22 }}>
          <div className="eyebrow">{t.nav_sign}</div>
          <h1>{t.sign_title}</h1>
          <div className="sub">{t.sign_sub}</div>
        </div>
        <div className="locked-banner">
          <Lock size={16} /> {t.sign_login_required}
          <button className="btn btn-primary" onClick={() => setView("account")}>{t.sign_login_cta}</button>
        </div>
      </>
    );
  }

  function addDoc(e) {
    e.preventDefault();
    if (!newDocName.trim()) return;
    setPendingDocs((prev) => [...prev, { id: "doc-" + Date.now(), name: newDocName.trim() }]);
    setNewDocName("");
  }

  function signDoc(doc) {
    if (!canSign) return;
    const code = "CIV-" + Math.random().toString(36).slice(2, 10).toUpperCase();
    const now = new Date().toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" });
    setSignedDocs((prev) => [{ ...doc, code, date: now, signer: account.name }, ...prev]);
    setPendingDocs((prev) => prev.filter((d) => d.id !== doc.id));
  }

  return (
    <>
      <div className="page-head" style={{ marginBottom: 22 }}>
        <div className="eyebrow">{t.nav_sign}</div>
        <h1>{t.sign_title}</h1>
        <div className="sub">{t.sign_sub}</div>
      </div>

      {!canSign && (
        <div className="locked-banner">
          <Lock size={16} /> {t.sign_locked_msg} {t[`tier_${TIER_ORDER[requiredTierIndex]}`]}
          <button className="btn btn-primary" onClick={() => setView("account")}>{t.sign_login_cta}</button>
        </div>
      )}

      <h3 className="section-head">{t.sign_upload_title}</h3>
      <form className="upload-row" onSubmit={addDoc}>
        <input value={newDocName} onChange={(e) => setNewDocName(e.target.value)} placeholder={t.sign_upload_ph} />
        <button className="btn btn-ghost" type="submit"><UploadCloud size={15} /> {t.sign_upload_btn}</button>
      </form>

      <h3 className="section-head">{t.sign_pending_title}</h3>
      {pendingDocs.length === 0 && <div className="section-sub">{t.sign_empty_pending}</div>}
      {pendingDocs.map((doc) => (
        <div key={doc.id} className="doc-card">
          <div className="doc-top">
            <div className="doc-name"><FileText size={16} /> {doc.name}</div>
            <button className="btn btn-primary" disabled={!canSign} onClick={() => signDoc(doc)}>
              <PenTool size={14} /> {t.sign_btn}
            </button>
          </div>
        </div>
      ))}

      <h3 className="section-head" style={{ marginTop: 22 }}>{t.sign_history_title}</h3>
      {signedDocs.length === 0 && <div className="section-sub">{t.sign_empty_history}</div>}
      {signedDocs.map((doc) => (
        <div key={doc.id} className="doc-card">
          <div className="doc-top">
            <div className="doc-name"><CheckCircle2 size={16} color="var(--moss)" /> {doc.name}</div>
            <button className="btn btn-ghost"><Download size={14} /> {t.sign_download}</button>
          </div>
          <div className="cert-box">
            <div className="cert-line"><Hash size={12} /> {t.sign_cert_label}: {doc.code}</div>
            <div className="cert-line">{t.sign_signed_by}: {doc.signer}</div>
            <div className="cert-line">{t.sign_signed_on}: {doc.date}</div>
          </div>
        </div>
      ))}
    </>
  );
}

/* ---------------------------------------------------------------
   PUBLIC DATA — transparency dashboard
--------------------------------------------------------------- */

function PublicData({ t, lang }) {
  const totalReports = PUBLIC_STATS.reduce((sum, s) => sum + s.total, 0);
  const overallResolved = Math.round(
    PUBLIC_STATS.reduce((sum, s) => sum + s.total * s.resolvedPct, 0) / totalReports
  );
  const overallAvgDays = Math.round(
    PUBLIC_STATS.reduce((sum, s) => sum + s.total * s.avgDays, 0) / totalReports
  );

  return (
    <>
      <div className="page-head" style={{ marginBottom: 22 }}>
        <div className="eyebrow">{t.nav_public_data}</div>
        <h1>{t.pd_title}</h1>
        <div className="sub">{t.pd_sub}</div>
      </div>

      <div className="stat-grid">
        <StatCard value={totalReports.toLocaleString()} label={t.pd_total_reports} icon={<FileText size={22} />} />
        <StatCard value={`${overallResolved}%`} label={t.pd_overall_resolution} icon={<CheckCircle2 size={22} />} />
        <StatCard value={`${overallAvgDays}d`} label={t.pd_avg_time} icon={<Clock size={22} />} />
      </div>

      <h3 className="section-head">{t.pd_by_category}</h3>
      <div className="pd-legend">
        <span>{t.pd_category_col}</span>
        <span style={{ marginLeft: "auto" }}>{t.pd_reports_col} · {t.pd_avgtime_col} · {t.pd_resolved_col}</span>
      </div>
      {PUBLIC_STATS.map((s) => (
        <div key={s.category} className="pd-row">
          <div className="pd-cat">{CATEGORY_LABELS[lang][s.category] || s.category}</div>
          <div className="pd-bar-track"><div className="pd-bar-fill" style={{ width: `${s.resolvedPct}%` }} /></div>
          <div className="pd-meta">{s.total} · {s.avgDays}d · {s.resolvedPct}%</div>
        </div>
      ))}
    </>
  );
}

/* ---------------------------------------------------------------
   NEWS
--------------------------------------------------------------- */

function News({ t, lang, openChatWith }) {
  const items = NEWS[lang] || NEWS.en;
  return (
    <>
      <div className="page-head" style={{ marginBottom: 22 }}>
        <div className="eyebrow">{t.nav_news}</div>
        <h1>{t.news_title}</h1>
        <div className="sub">{t.news_sub}</div>
      </div>

      {items.map((item) => (
        <div key={item.id} className="news-card">
          <div className="news-date">{item.date}</div>
          <h3 className="news-title">{item.title}</h3>
          <div className="news-excerpt">{item.excerpt}</div>
          <button className="link-btn" onClick={() => openChatWith(`${item.title} — ${item.excerpt}`)}>
            <Sparkles size={14} /> {t.news_explain_btn} <ArrowRight size={13} />
          </button>
        </div>
      ))}
    </>
  );
}

/* ---------------------------------------------------------------
   CHAT DRAWER — with voice input and read-aloud
--------------------------------------------------------------- */

function ChatDrawer({ t, lang, seed, simpleLanguage, onClose }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState(seed || "");
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);
  const bodyRef = useRef(null);
  const recognitionRef = useRef(null);

  const SpeechRecognitionApi =
    typeof window !== "undefined" && (window.SpeechRecognition || window.webkitSpeechRecognition);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [messages, loading]);

  function speak(text) {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = LANG_SPEECH[lang] || "en-US";
    window.speechSynthesis.speak(u);
  }

  function toggleVoiceInput() {
    if (!SpeechRecognitionApi) return;
    if (listening) {
      recognitionRef.current && recognitionRef.current.stop();
      setListening(false);
      return;
    }
    const recognition = new SpeechRecognitionApi();
    recognition.lang = LANG_SPEECH[lang] || "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.onresult = (e) => {
      const transcript = e.results[0][0].transcript;
      setInput(transcript);
    };
    recognition.onend = () => setListening(false);
    recognition.onerror = () => setListening(false);
    recognitionRef.current = recognition;
    recognition.start();
    setListening(true);
  }

  async function send(overrideText) {
    const text = (overrideText !== undefined ? overrideText : input).trim();
    if (!text || loading) return;
    const langName = { en: "English", pt: "Portuguese", es: "Spanish" }[lang];
    const newMessages = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);
    try {
      let sys = `You are the MyGov Assistant on MyGov, a government-services platform. You help citizens understand government services, required documents, and processes; you recommend the most relevant public service for their need; you help interpret official notices in plain language; you explain how to track a complaint; and you are fully multilingual. Reply in the same language the citizen writes in, defaulting to ${langName} if unclear. Be concise, warm, and concrete. Use short paragraphs or bullet points. Known services on this platform: ${SERVICES.map((s) => s.name).join(", ")}. Known issue-report categories: ${CATEGORIES.join(", ")}. The platform uses account verification tiers (Bronze, Silver, Gold) — higher-sensitivity services and document signing require Silver or Gold, reached via phone/address verification or a government ID scan. Never invent legal requirements you're unsure of — speak in generally-applicable terms and suggest confirming with the responsible department when specifics might vary by city or country.`;
      if (simpleLanguage) {
        sys += " Very important: use very simple words and short sentences, as if explaining to someone with limited literacy or someone who just started learning the language. Avoid jargon and long words when a simple one works.";
      }
      const reply = await askClaude(sys, newMessages);
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (e) {
      setMessages((prev) => [...prev, { role: "assistant", content: "Something went wrong reaching the assistant. Please try again." }]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (seed) send(seed);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="drawer">
      <div className="drawer-head">
        <div>
          <h3>{t.chat_title}</h3>
          <div className="sub">{t.chat_sub}</div>
        </div>
        <button className="drawer-close" onClick={onClose}><X size={18} /></button>
      </div>
      <div className="drawer-body" ref={bodyRef}>
        {messages.length === 0 && (
          <div className="empty-chat">
            <Sparkles size={22} />
            <div>{t.chat_empty}</div>
          </div>
        )}
        {messages.map((m, i) => (
          <div key={i} className={`msg ${m.role === "user" ? "user" : "ai"}`}>
            <div className="msg-text">{m.content}</div>
            {m.role === "assistant" && (
              <button className="msg-speak" onClick={() => speak(m.content)}>
                <Volume2 size={12} /> {t.read_aloud}
              </button>
            )}
          </div>
        ))}
        {loading && <div className="msg ai thinking">{t.chat_thinking}</div>}
      </div>
      <div className="drawer-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder={t.chat_placeholder}
        />
        <button
          className={`mic-btn ${listening ? "listening" : ""}`}
          onClick={toggleVoiceInput}
          disabled={!SpeechRecognitionApi}
          title={SpeechRecognitionApi ? t.voice_start : t.voice_unsupported}
        >
          <Mic size={16} />
        </button>
        <button onClick={() => send()} disabled={loading || !input.trim()}><Send size={16} /></button>
      </div>
    </div>
  );
}
