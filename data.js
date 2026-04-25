// ============================================================
// CYBERSEC STUDY DATA - Ajoutez vos questions ici facilement
// Structure : CHAPTERS[chN].qcm / .flashcards / .exercises
// ============================================================

const CHAPTERS = {

  // ─────────────────────────────────────────────────────────────
  ch1: {
    id: 1,
    title: "Introduction au projet",
    subtitle: "Cybersécurité & méthodologie",
    icon: "🏗️",
    color: "#64748b",
    content: [
      {
        section: "Le projet cybersécurité",
        points: [
          "Déployer et sécuriser plusieurs réseaux locaux interconnectés par deux WAN dans les locaux 2/13 et 2/16.",
          "Architecture : deux sites centraux (hiérarchique, équipes 2-3 étudiants) + agences distantes (équipes 1-2).",
          "Sécurisation via UTM FortiGate + durcissement des périphériques réseau.",
          "Une zone DMZ obligatoire par site central et par agence (serveur web Linux ou VM DVWA).",
          "Attribution IP via DHCP. Documentation à remettre 1h avant la fin de la dernière séance."
        ]
      },
      {
        section: "Méthodologie & bonnes pratiques",
        points: [
          "Principe fondamental : Compliant ≠ Secure. Respecter une norme ne garantit pas la sécurité.",
          "Exemple : une grille installée selon la norme est 'compliant' mais pas forcément sécurisée (grille sans cadenas).",
          "Toujours comprendre ce qu'on fait : une règle respectée sans compréhension est dangereuse.",
          "Suivre les référentiels (normes, standards, bonnes pratiques) tout en réfléchissant au contexte.",
          "Approche : Réfléchir → Analyser → Tester → Améliorer."
        ]
      },
      {
        section: "Normes et référentiels",
        points: [
          "Les référentiels guident mais ne disent pas toujours exactement COMMENT faire dans chaque situation.",
          "La conformité (compliance) est un minimum, non un objectif final.",
          "Un consultant doit toujours être capable d'expliquer chaque commande/configuration validée.",
          "Méthode de l'administrateur : planifier les interventions, ne jamais arriver sans préparation."
        ]
      }
    ],
    qcm: [
      {
        id: "ch1_q1",
        question: "Quelle est la principale différence entre être 'compliant' et être 'secure' ?",
        options: [
          "Ce sont deux termes synonymes en cybersécurité.",
          "Être compliant signifie respecter une norme, mais cela ne garantit pas forcément la sécurité réelle.",
          "Être secure implique d'avoir un budget supérieur à celui nécessaire pour être compliant.",
          "La conformité est toujours suffisante pour garantir la sécurité."
        ],
        correct: [1],
        explanation: "Un système peut être conforme à une norme (compliant) tout en restant vulnérable. Ex : une grille installée selon la norme mais sans cadenas est conforme mais pas sécurisée."
      },
      {
        id: "ch1_q2",
        question: "Dans le projet cybersécurité, qu'est-ce qu'une zone DMZ ?",
        options: [
          "Un réseau purement interne sans accès externe.",
          "Une zone démilitarisée placée entre le réseau interne et Internet, hébergeant des services accessibles depuis l'extérieur.",
          "Un protocole de chiffrement utilisé par FortiGate.",
          "Le nom donné à l'interface WAN du FortiGate."
        ],
        correct: [1],
        explanation: "La DMZ (DeMilitarized Zone) est un sous-réseau exposé entre le LAN et Internet. Elle héberge des services publics (serveur web, mail…) pour limiter l'exposition du réseau interne."
      },
      {
        id: "ch1_q3",
        question: "Quelle approche méthodologique est recommandée pour l'administrateur réseau ?",
        options: [
          "Arriver en TP et improviser en fonction du matériel disponible.",
          "Appliquer les commandes trouvées sur Internet sans les comprendre.",
          "Planifier l'intervention, comprendre chaque action, se référer aux bonnes pratiques et tester.",
          "S'en tenir strictement aux normes sans jamais réfléchir au contexte."
        ],
        correct: [2],
        explanation: "La méthode de l'administrateur implique : planification, compréhension des actions, respect des référentiels ET réflexion contextuelle. Comprendre > copier-coller."
      },
      {
        id: "ch1_q4",
        question: "Comment les PC utilisateurs reçoivent-ils leur configuration IP dans le projet ?",
        options: [
          "Configuration manuelle statique sur chaque PC.",
          "Via DHCP.",
          "Via SLAAC IPv6 uniquement.",
          "Ils n'ont pas d'adresse IP configurée."
        ],
        correct: [1],
        explanation: "Les PC utilisateurs reçoivent leur configuration IP (adresse, masque, passerelle, DNS) via DHCP (Dynamic Host Configuration Protocol), ce qui simplifie la gestion."
      }
    ],
    flashcards: [
      {
        id: "ch1_f1",
        question: "Que signifie 'Compliant but not secure' ?",
        answer: "Un système peut respecter une norme (être compliant) sans être réellement sécurisé. Ex: installer une grille selon la norme mais sans cadenas est conforme mais pas sécurisé. La conformité est un minimum, pas un objectif de sécurité."
      },
      {
        id: "ch1_f2",
        question: "Qu'est-ce qu'une zone DMZ et pourquoi est-elle utilisée ?",
        answer: "Une DMZ (DeMilitarized Zone) est un sous-réseau isolé placé entre le LAN et Internet. Elle héberge les services publics (serveur web, DVWA…) pour limiter l'exposition du réseau interne en cas de compromission d'un service."
      },
      {
        id: "ch1_f3",
        question: "Quelle est la structure du projet cybersécurité ?",
        answer: "Deux sites centraux (locaux 2/13 et 2/16, architecture hiérarchique) interconnectés par deux WAN, avec des agences distantes. Chaque site a : LAN, DMZ, FortiGate UTM. Attribution IP via DHCP."
      },
      {
        id: "ch1_f4",
        question: "Quelle est la démarche recommandée face à une norme ou référentiel ?",
        answer: "Lire et comprendre le référentiel, puis réfléchir au contexte spécifique. Les normes ne disent pas toujours COMMENT faire dans chaque cas. Approche : Réfléchir → Analyser → Tester → Améliorer."
      }
    ],
    exercises: [
      {
        id: "ch1_e1",
        type: "open",
        question: "Vous êtes consultant chez un client. Il vous demande : 'Nous avons passé notre audit de conformité ISO 27001, sommes-nous sécurisés ?' Que lui répondez-vous ?",
        answer: "La certification ISO 27001 atteste de la conformité aux processus de sécurité, mais ne garantit pas l'absence de vulnérabilités techniques. Il faut compléter avec : tests d'intrusion, audits techniques, surveillance continue. 'Compliant but not secure' est une réalité fréquente."
      },
      {
        id: "ch1_e2",
        type: "qcm",
        question: "Un client veut que vous installiez un serveur web accessible depuis Internet. Où doit-il être placé ?",
        options: [
          "Directement sur le LAN interne de l'entreprise.",
          "Dans la DMZ, isolée entre le pare-feu et Internet.",
          "Sur le même réseau que les postes administrateurs.",
          "Sur l'interface WAN du FortiGate."
        ],
        correct: [1],
        explanation: "Un serveur web accessible depuis Internet doit être dans la DMZ. Si le serveur est compromis, l'attaquant n'a pas accès direct au LAN interne."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  ch2: {
    id: 2,
    title: "Introduction à l'UTM FortiGate",
    subtitle: "FortiOS 7.4 — NGFW & Administration",
    icon: "🔥",
    color: "#ef4444",
    content: [
      {
        section: "Qu'est-ce qu'un UTM FortiGate ?",
        points: [
          "Fortinet : multinationale américaine fondée en 2000, spécialisée en cybersécurité.",
          "FortiGate = NGFW (Next Generation Firewall) = UTM (Unified Threat Management).",
          "Fonctionnalités intégrées : Filtrage Web, IPS, contrôle d'application, proxy, routage, antivirus, DLP, VPN, DNS, DHCP…",
          "Fortinet Security Fabric : les équipements Fortinet s'échangent des informations entre eux.",
          "Certification NSE4 (FCP FortiGate Admin) : 50 QCM, 90 min, seuil 60%, valable 2 ans, ~400$."
        ]
      },
      {
        section: "Modes de déploiement",
        points: [
          "Pare-feu de nouvelle génération (NGFW périmétrique) : entre Internet et le LAN.",
          "Pare-feu de segmentation interne : entre différents segments du réseau interne.",
          "Pare-feu de data center : pour protéger les serveurs.",
          "Pare-feu distribué : déployé à plusieurs endroits."
        ]
      },
      {
        section: "Deux modes de fonctionnement",
        points: [
          "Mode NAT/Route (par défaut) : le FortiGate agit comme un routeur/firewall de couche 3. Chaque interface a une IP différente. Effectue de la translation d'adresses (NAT).",
          "Mode Transparent : le FortiGate est invisible au niveau réseau (couche 2). Pas d'adresse IP sur les interfaces (sauf une pour la gestion). Ne fait pas de routage ni de NAT. Idéal pour insertion dans un réseau existant sans modifier le routage.",
          "Le mode NAT/Route est le plus couramment utilisé."
        ]
      },
      {
        section: "Administration de base",
        points: [
          "Connexion via interface web (HTTPS) ou CLI (SSH, console).",
          "Configuration des interfaces physiques, VLAN, passerelle par défaut.",
          "Gestion des administrateurs : super_admin (accès total) vs prof_admin (accès restreint).",
          "Authentification à deux facteurs (2FA) : token par email, SMS, application mobile (FortiToken).",
          "Sauvegarde/restauration de la configuration, mise à jour du firmware FortiOS.",
          "Accès admin : HTTP/HTTPS, SSH, Telnet (déconseillé), PING, SNMP."
        ]
      },
      {
        section: "Sécuriser l'accès administratif",
        points: [
          "Changer les identifiants par défaut immédiatement.",
          "Utiliser HTTPS et SSH plutôt que HTTP et Telnet.",
          "Activer l'authentification à deux facteurs (2FA).",
          "Restreindre les adresses IP autorisées pour l'administration.",
          "Définir des profils d'administrateur avec le minimum de privilèges nécessaires.",
          "Configurer un timeout de session."
        ]
      }
    ],
    qcm: [
      {
        id: "ch2_q1",
        question: "Qu'est-ce qu'un VDOM (Virtual Domain) dans un FortiGate ?",
        options: [
          "Une instance virtuelle d'un FortiGate permettant de diviser un FortiGate en plusieurs pare-feux logiques fonctionnant de manière autonome.",
          "Une configuration qui divise les connexions réseau afin de séparer le trafic entrant et sortant.",
          "Un mécanisme pour activer les mises à jour automatiques des signatures.",
          "Un type d'interface réseau virtuelle pour créer des liaisons logiques."
        ],
        correct: [0],
        explanation: "Un VDOM est une instance virtuelle d'un FortiGate. Il permet de partitionner un seul équipement physique en plusieurs pare-feux logiques indépendants, chacun avec ses propres interfaces, règles et configurations."
      },
      {
        id: "ch2_q2",
        question: "Quel est le mode de fonctionnement le plus couramment utilisé sur un FortiGate ?",
        options: [
          "Mode Transparent",
          "Mode Bridge",
          "Mode NAT/Route",
          "Mode VLAN"
        ],
        correct: [2],
        explanation: "Le mode NAT/Route est le mode par défaut et le plus utilisé. Il opère en couche 3, effectue du routage et du NAT. Le mode Transparent est utilisé pour une insertion 'invisible' dans un réseau existant."
      },
      {
        id: "ch2_q3",
        question: "Citez trois moyens de renforcer la sécurité de l'accès administratif d'un FortiGate :",
        options: [
          "Utiliser HTTP, désactiver le 2FA, utiliser le compte admin par défaut.",
          "Utiliser HTTPS/SSH, activer le 2FA, restreindre les IPs autorisées pour l'admin.",
          "Ouvrir l'accès admin depuis Internet pour faciliter la maintenance.",
          "Utiliser Telnet, partager le mot de passe entre collègues, désactiver les logs."
        ],
        correct: [1],
        explanation: "Bonnes pratiques : HTTPS/SSH (pas HTTP/Telnet), 2FA activé, restriction des IPs sources autorisées, mots de passe forts, profils avec moindre privilège, timeout de session."
      },
      {
        id: "ch2_q4",
        question: "Quelle est la différence principale entre le mode NAT/Route et le mode Transparent d'un FortiGate ?",
        options: [
          "En mode NAT/Route, le FortiGate ne fait pas de routage. En mode Transparent, il route les paquets.",
          "En mode NAT/Route (couche 3), il route et fait du NAT. En mode Transparent (couche 2), il est invisible dans le réseau et ne route pas.",
          "Les deux modes sont identiques, seul le nom change selon la version de FortiOS.",
          "Le mode Transparent est plus rapide car il chiffre les données."
        ],
        correct: [1],
        explanation: "NAT/Route : fonctionne en L3, chaque interface a une IP, fait du routage et NAT. Transparent : fonctionne en L2, aucune IP sur les interfaces de trafic, invisible, s'insère sans modification du routage existant."
      },
      {
        id: "ch2_q5",
        question: "Quelles méthodes peuvent délivrer un token lors d'une authentification à deux facteurs ?",
        options: [
          "Uniquement par SMS.",
          "Email, SMS, application mobile (FortiToken), ou token matériel.",
          "Uniquement par application mobile.",
          "Le FortiGate ne supporte pas l'authentification à deux facteurs."
        ],
        correct: [1],
        explanation: "Le FortiGate supporte plusieurs méthodes de délivrance de token 2FA : email, SMS, application mobile (FortiToken Mobile), et tokens matériels (FortiToken 200)."
      },
      {
        id: "ch2_q6",
        question: "Quelle est la différence entre les profils super_admin et prof_admin ?",
        options: [
          "super_admin a accès à tout (configuration, VDOM, système global). prof_admin a des accès restreints définis par l'administrateur.",
          "prof_admin est plus puissant que super_admin car il peut créer de nouveaux super_admin.",
          "Il n'y a aucune différence fonctionnelle entre ces deux profils.",
          "super_admin ne peut pas modifier les règles de pare-feu."
        ],
        correct: [0],
        explanation: "super_admin : accès complet à toute la configuration, y compris la gestion des VDOM et paramètres globaux. prof_admin (et les autres profils personnalisés) : accès restreint aux fonctionnalités définies. Principe du moindre privilège."
      },
      {
        id: "ch2_q7",
        question: "Citez 5 fonctionnalités de sécurité (profils de sécurité) supportées par un FortiGate :",
        options: [
          "Routage, DHCP, DNS, NTP, SNMP.",
          "Antivirus, IPS, Filtrage Web, Contrôle d'application, DLP (Data Loss Prevention).",
          "VPN, OSPF, BGP, ECMP, RIP.",
          "VLAN, LACP, STP, LLDP, 802.1X."
        ],
        correct: [1],
        explanation: "Les profils de sécurité FortiGate incluent : Antivirus, IPS (Intrusion Prevention System), Web Filter, Application Control, DLP, Email Filter, DNS Filter, SSL/SSH Inspection, et Sandbox (FortiSandbox)."
      }
    ],
    flashcards: [
      {
        id: "ch2_f1",
        question: "UTM vs NGFW : quelle est la différence ?",
        answer: "UTM (Unified Threat Management) et NGFW (Next Generation Firewall) sont souvent utilisés comme synonymes. Un NGFW intègre en plus de l'inspection applicative profonde (DPI), de la conscience de l'identité utilisateur, et une meilleure intégration avec les services cloud. FortiGate est qualifié de NGFW+UTM."
      },
      {
        id: "ch2_f2",
        question: "Mode NAT/Route vs Mode Transparent : caractéristiques principales ?",
        answer: "NAT/Route : L3, chaque interface a une IP différente, fait du routage + NAT, le plus couramment utilisé. Transparent : L2, invisible dans le réseau, pas de routage ni NAT, s'insère sans modifier le routage existant. Un changement de mode efface la plupart de la configuration."
      },
      {
        id: "ch2_f3",
        question: "Qu'est-ce que le Fortinet Security Fabric ?",
        answer: "Écosystème Fortinet où les différents équipements (FortiGate, FortiSwitch, FortiAP, FortiAnalyzer…) échangent des informations entre eux pour une protection coordonnée. Permet une visibilité globale et une réponse automatisée aux menaces."
      },
      {
        id: "ch2_f4",
        question: "Qu'est-ce qu'un VDOM FortiGate ?",
        answer: "Virtual Domain : instance virtuelle d'un FortiGate. Permet de diviser un équipement physique en plusieurs pare-feux logiques indépendants (propres interfaces, règles, tables de routage, administrateurs). Utile pour les opérateurs gérant plusieurs clients sur un même équipement."
      },
      {
        id: "ch2_f5",
        question: "Quelles sont les 3 méthodes pour sécuriser l'accès admin FortiGate ?",
        answer: "1) Protocoles sécurisés : HTTPS et SSH (interdire HTTP et Telnet). 2) Authentification renforcée : 2FA (FortiToken, email, SMS) + mots de passe forts. 3) Restriction d'accès : filtrer les IP sources autorisées, utiliser des profils avec moindre privilège, timeout de session."
      },
      {
        id: "ch2_f6",
        question: "Certification NSE4 FortiGate : caractéristiques ?",
        answer: "50 QCM, 90 minutes, seuil de réussite 60%, disponible en anglais/japonais/français. Valable 2 ans. Coût ~400$ (un voucher gratuit disponible pour les étudiants HEH). Objectif : configurer, installer et surveiller des FortiGate."
      }
    ],
    exercises: [
      {
        id: "ch2_e1",
        type: "qcm",
        question: "Vous devez insérer un FortiGate dans un réseau existant sans modifier le plan d'adressage ni le routage des équipements. Quel mode choisissez-vous ?",
        options: [
          "Mode NAT/Route",
          "Mode Transparent",
          "Mode VDOM",
          "Mode Cluster HA"
        ],
        correct: [1],
        explanation: "Le mode Transparent (L2) permet d'insérer le FortiGate de manière invisible sans modifier le plan d'adressage ni la configuration des équipements existants. Parfait pour une insertion rapide dans un réseau en production."
      },
      {
        id: "ch2_e2",
        type: "open",
        question: "Un FAI veut gérer les FortiGate de 10 clients différents sur un seul équipement physique. Quelle fonctionnalité FortiGate utiliserait-il et pourquoi ?",
        answer: "Les VDOMs (Virtual Domains). Chaque client obtient son propre VDOM (pare-feu virtuel isolé) avec ses propres interfaces, règles, table de routage et administrateur dédié. Les clients sont complètement isolés les uns des autres, comme s'ils avaient chacun leur propre FortiGate physique, mais sur une seule machine."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  ch3: {
    id: 3,
    title: "Règles de pare-feu",
    subtitle: "Firewall Policies",
    icon: "📋",
    color: "#f97316",
    content: [
      {
        section: "Fonctionnement des règles",
        points: [
          "Une règle définit à quel trafic elle s'applique et comment traiter ce trafic.",
          "Ordonnancement critique : la PREMIÈRE règle correspondante s'applique (first match), les suivantes sont ignorées.",
          "Règle par défaut : Policy0 'Implicit Deny' — tout ce qui n'est pas explicitement autorisé est bloqué.",
          "La Policy0 ne peut pas être supprimée, seule la journalisation peut être modifiée."
        ]
      },
      {
        section: "Critères d'une règle",
        points: [
          "Interfaces source et destination (From → To).",
          "Adresses source et destination : IP, sous-réseau, FQDN, zone géographique, Fabric connector (adresse dynamique), objet ISDB.",
          "Champ Destination en plus : objet ISDB Internet Service Database.",
          "Horaire (Schedule) : quand la règle est active.",
          "Service : protocole + numéro de port (HTTP, HTTPS, SSH, FTP, DNS…).",
          "TOUS les critères doivent correspondre pour qu'une règle s'applique."
        ]
      },
      {
        section: "Actions et profils de sécurité",
        points: [
          "Action ACCEPT : le trafic est autorisé → inspection des profils de sécurité → autres traitements (NAT, auth, QoS, logs).",
          "Action DENY : le trafic est bloqué.",
          "Si tous les profils de sécurité valident, le trafic passe. Sinon, il est bloqué selon l'action du profil.",
          "Profils de sécurité : Antivirus, IPS, Web Filter, App Control, DLP, Email Filter, SSL Inspection…"
        ]
      },
      {
        section: "Champs Source et Destination",
        points: [
          "Source peut contenir : IP/réseau, FQDN, zone géographique, Fabric connector, ISDB.",
          "Source ne peut PAS contenir seuls : utilisateur, groupe d'utilisateurs, périphérique source, périphérique destination (doivent être combinés avec une adresse).",
          "Destination : IP/réseau, FQDN, zone géographique, Fabric connector, ISDB.",
          "Service : protocole + port (ex: TCP/443 pour HTTPS), groupe de services, ALL."
        ]
      },
      {
        section: "Objets de pare-feu",
        points: [
          "Un objet est un élément nommé et réutilisable : adresse IP, groupe d'IPs, service, groupe de services…",
          "Avantages : simplifie la gestion (modifier l'objet = modifier toutes les règles qui l'utilisent), améliore la lisibilité.",
          "Objets ISDB : Internet Service Database — contient les IPs/ports des services Internet connus (Microsoft 365, Zoom, Netflix…). Référencés par nom, la base est maintenue à jour par Fortinet.",
          "Route ISDB : si la destination est un objet ISDB, la route n'apparaît PAS dans la table de routage RIB/FIB standard."
        ]
      },
      {
        section: "Bonnes pratiques de configuration",
        points: [
          "Modèle de sécurité positif : tout bloquer par défaut, n'autoriser que le nécessaire.",
          "Principe du moindre privilège : autoriser uniquement le strict nécessaire.",
          "Être précis : configurer source, destination ET service (éviter les règles avec 'ALL' partout).",
          "Utiliser des objets pour simplifier la gestion et la maintenance.",
          "Journaliser : activer les logs pour analyser, diagnostiquer et détecter les anomalies.",
          "Numéro de séquence ≠ ID : l'ordre de traitement suit le numéro de SÉQUENCE, pas l'ID."
        ]
      },
      {
        section: "Types de règles de pare-feu",
        points: [
          "IPv4 Policy : pour le trafic IPv4 (le plus courant).",
          "IPv6 Policy : pour le trafic IPv6.",
          "Local In Policy : trafic à destination du FortiGate lui-même (gestion).",
          "Multicast Policy : pour le trafic multicast.",
          "IPv4 DoS Policy : protection contre les attaques DoS."
        ]
      }
    ],
    qcm: [
      {
        id: "ch3_q1",
        question: "Qu'est-ce qui distingue un pare-feu stateful d'un pare-feu stateless ?",
        options: [
          "Un pare-feu stateful peut comparer le trafic avec des signatures de menaces, tandis qu'un stateless se limite au contrôle d'accès IP/port.",
          "Un stateful est utilisé pour analyser le trafic entrant ET sortant, tandis qu'un stateless est utilisé uniquement pour le trafic entrant.",
          "Un stateful fonctionne uniquement sur les couches physiques et réseau du modèle OSI.",
          "Un pare-feu stateful conserve des informations sur les connexions actives pour prendre des décisions, tandis qu'un stateless traite chaque paquet individuellement sans contexte."
        ],
        correct: [3],
        explanation: "Un pare-feu stateful maintient une table des sessions/connexions actives. Il peut donc distinguer une réponse légitime d'une attaque. Le stateless examine chaque paquet indépendamment, ce qui est moins sécurisé mais plus rapide."
      },
      {
        id: "ch3_q2",
        question: "Dans quel ordre sont traitées les règles de pare-feu FortiGate ?",
        options: [
          "Par ordre d'ID décroissant.",
          "Par ordre de numéro de séquence (du plus petit au plus grand) — la première correspondance s'applique.",
          "Par ordre alphabétique du nom de la règle.",
          "Toutes les règles sont évaluées et la plus spécifique s'applique."
        ],
        correct: [1],
        explanation: "Les règles sont évaluées dans l'ordre de leur numéro de SÉQUENCE (pas l'ID). La première règle correspondant au trafic s'applique. L'ID est un identifiant unique permanent, le numéro de séquence change quand on réordonne les règles."
      },
      {
        id: "ch3_q3",
        question: "Lesquels NE PEUVENT PAS être utilisés seuls dans le champ source d'une règle de pare-feu ?",
        options: [
          "Une adresse IP et un FQDN.",
          "Un utilisateur, un groupe d'utilisateurs, un périphérique source, un périphérique destination.",
          "Un objet ISDB et une zone géographique.",
          "Un sous-réseau et une adresse IP."
        ],
        correct: [1],
        explanation: "Utilisateur, groupe d'utilisateurs, périphérique source et périphérique destination ne peuvent pas être utilisés seuls dans le champ source — ils doivent être combinés avec une adresse IP/réseau. Un objet ISDB, une IP, un FQDN ou une zone géographique peuvent être utilisés seuls."
      },
      {
        id: "ch3_q4",
        question: "D'après un tableau de règles de pare-feu (Seq: 1,2,5,6,7,3,4,0), si les règles d'ID 1 et 2 ne correspondent pas, quelle règle sera évaluée ensuite ?",
        options: [
          "La règle d'ID 3",
          "La règle d'ID 4",
          "La règle d'ID 0 (Implicit Deny)",
          "La règle d'ID 5"
        ],
        correct: [3],
        explanation: "L'ordre de traitement suit le numéro de SÉQUENCE, pas l'ID. Dans la séquence 1,2,5,6,7,3,4,0 : après l'ID 1 (seq 1) et ID 2 (seq 2), c'est l'ID 5 qui est en séquence 3. Donc la règle d'ID 5 est évaluée en troisième."
      },
      {
        id: "ch3_q5",
        question: "Qu'est-ce qu'un objet ISDB ?",
        options: [
          "Un type d'interface réseau virtuelle.",
          "Une base de données contenant les adresses IP et ports des services Internet connus (Microsoft, Google, Zoom…) maintenue par Fortinet.",
          "Un protocole de routage dynamique utilisé par FortiGate.",
          "Un format de certificat SSL utilisé pour l'authentification."
        ],
        correct: [1],
        explanation: "Internet Service Database (ISDB) : base de données maintenue par FortiGuard contenant les adresses IP, protocoles et ports de services Internet connus. Permet de créer des règles basées sur des services nommés plutôt que des IPs qui changent fréquemment."
      },
      {
        id: "ch3_q6",
        question: "Quelle est la règle par défaut (implicite) d'un FortiGate et peut-on la supprimer ?",
        options: [
          "Allow All — oui, on peut la supprimer.",
          "Deny All (Policy0 / Implicit Deny) — non, elle ne peut pas être supprimée.",
          "Allow All — non, elle ne peut pas être supprimée.",
          "Deny All — oui, on peut la supprimer pour autoriser tout le trafic."
        ],
        correct: [1],
        explanation: "La Policy0 'Implicit Deny All' est la règle de sécurité positive par défaut : tout trafic non explicitement autorisé est bloqué. Elle est permanente et ne peut pas être supprimée. On peut uniquement modifier la journalisation associée."
      },
      {
        id: "ch3_q7",
        question: "Citez 4 types de règles de pare-feu sur un FortiGate :",
        options: [
          "ARP, ICMP, UDP, TCP.",
          "IPv4 Policy, IPv6 Policy, Local In Policy, Multicast Policy.",
          "NAT Rule, Route Rule, Bridge Rule, VPN Rule.",
          "Allow Rule, Deny Rule, Monitor Rule, Shape Rule."
        ],
        correct: [1],
        explanation: "FortiGate supporte : IPv4 Policy (trafic IPv4), IPv6 Policy (trafic IPv6), Local In Policy (trafic vers le FortiGate lui-même), Multicast Policy (trafic multicast), IPv4 DoS Policy (protection DoS)."
      }
    ],
    flashcards: [
      {
        id: "ch3_f1",
        question: "Qu'est-ce que le 'first match' dans les règles de pare-feu ?",
        answer: "Le FortiGate évalue les règles dans l'ordre de séquence (du haut vers le bas). La PREMIÈRE règle dont TOUS les critères correspondent au trafic s'applique. Les règles suivantes ne sont plus évaluées. C'est pourquoi l'ordre des règles est critique."
      },
      {
        id: "ch3_f2",
        question: "Quelle est la différence entre le numéro d'ID et le numéro de séquence d'une règle ?",
        answer: "ID : identifiant unique permanent d'une règle (attribué à la création, ne change jamais). Séquence : position dans l'ordre de traitement (change quand on réordonne les règles). Le trafic est traité selon l'ordre de SÉQUENCE, pas d'ID."
      },
      {
        id: "ch3_f3",
        question: "Qu'est-ce que la sécurité positive (positive security model) ?",
        answer: "Principe : tout est bloqué par défaut (deny all), seul le trafic explicitement autorisé est permis. Opposé à la sécurité négative (autoriser tout sauf le mauvais). La sécurité positive réduit drastiquement la surface d'attaque."
      },
      {
        id: "ch3_f4",
        question: "Que peut contenir le champ 'Source' d'une règle FortiGate ?",
        answer: "IP/sous-réseau, FQDN, zone géographique, Fabric connector (adresse dynamique), objet ISDB. NE PEUT PAS être utilisé seul : utilisateur, groupe d'utilisateurs, périphérique source/destination (doivent être combinés avec une adresse)."
      },
      {
        id: "ch3_f5",
        question: "Pourquoi utiliser des objets dans les règles de pare-feu ?",
        answer: "1) Réutilisabilité : un objet utilisé dans 10 règles → modifier l'objet = modifier les 10 règles. 2) Lisibilité : 'WebServers-DMZ' est plus clair que '172.16.1.10, 172.16.1.11, 172.16.1.12'. 3) Maintenance simplifiée et moins d'erreurs."
      },
      {
        id: "ch3_f6",
        question: "Stateful vs Stateless firewall : définitions ?",
        answer: "Stateful : conserve une table des connexions actives. Peut distinguer une réponse légitime d'une attaque. Sécurité supérieure. Stateless : traite chaque paquet indépendamment sans contexte. Plus rapide mais moins sécurisé. FortiGate est stateful."
      }
    ],
    exercises: [
      {
        id: "ch3_e1",
        type: "open",
        question: "Vous avez configuré une règle 'Allow_LAN_to_Internet' (ALL services) placée en premier. Quel problème pose cette règle et comment l'améliorer ?",
        answer: "Problème : la règle autorise TOUT le trafic LAN vers Internet (tous services) → violation du principe du moindre privilège, impossible de filtrer les applications dangereuses, logs inutilisables. Amélioration : créer des règles spécifiques par service (HTTP/HTTPS/DNS séparément), utiliser le contrôle d'application, activer des profils de sécurité (AV, Web Filter), journaliser par règle."
      },
      {
        id: "ch3_e2",
        type: "qcm",
        question: "Un utilisateur du LAN ne peut pas accéder à un site web en HTTPS mais peut accéder en HTTP. Quelle est la cause la plus probable ?",
        options: [
          "Le site web est en panne.",
          "La règle de pare-feu autorise le service HTTP (port 80) mais pas HTTPS (port 443).",
          "Le FortiGate est en mode Transparent.",
          "Le DHCP n'a pas attribué d'adresse IP à l'utilisateur."
        ],
        correct: [1],
        explanation: "HTTP utilise le port TCP 80, HTTPS utilise le port TCP 443. Si la règle ne contient que 'HTTP' dans le champ Service, le port 443 est bloqué par la règle implicite deny all. Il faut ajouter HTTPS (ou utiliser le service prédéfini 'Web Access' qui inclut les deux)."
      },
      {
        id: "ch3_e3",
        type: "qcm",
        question: "Vous souhaitez bloquer Facebook pendant les heures de travail (9h-18h) pour tous les utilisateurs. Quelle est la meilleure approche ?",
        options: [
          "Créer une règle DENY avec destination = IP de Facebook (mais les IPs changent souvent).",
          "Utiliser le Web Filter avec la catégorie 'Social Networks' + une règle avec schedule 09h-18h.",
          "Couper la connexion Internet pendant les heures de travail.",
          "Supprimer le câble réseau des PC utilisateurs."
        ],
        correct: [1],
        explanation: "La meilleure approche : Web Filter (catégorie Social Networks) car il utilise la base FortiGuard qui suit les IPs changeantes. Combiné avec un horaire (schedule) 9h-18h dans la règle. Utiliser une IP statique de Facebook est inefficace car Meta change fréquemment ses IPs (→ objet ISDB serait une alternative)."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  ch4: {
    id: 4,
    title: "Routage",
    subtitle: "Static, Policy-based, ECMP, RPF",
    icon: "🗺️",
    color: "#8b5cf6",
    content: [
      {
        section: "Routage en mode NAT/Route",
        points: [
          "En mode NAT/Route, le FortiGate agit comme un routeur IP (couche 3).",
          "La recherche de route se fait AVANT la plupart des actions du pare-feu (règles et profils de sécurité).",
          "Comportement stateful : pour chaque session, 2 route lookups (aller + retour). Les paquets suivants utilisent la table de sessions (pas la table de routage).",
          "Exception : si la table de routage change en cours de session, les infos de route sont effacées de la table de sessions."
        ]
      },
      {
        section: "RIB et FIB",
        points: [
          "RIB (Routing Information Base) : table de routage standard contenant les meilleures routes actives. Visible via la GUI ou 'get router info routing-table all'.",
          "FIB (Forwarding Information Base) : table de routage du noyau, utilisée pour la recherche de routes réelle (route lookup). Inclut les entrées RIB + entrées spécifiques au système.",
          "C'est la FIB qui est réellement utilisée pour le forwarding, pas la RIB.",
          "FIB visible uniquement en CLI : 'get router info kernel'."
        ]
      },
      {
        section: "Types de routes",
        points: [
          "Routes statiques : définies manuellement. Paramètres : destination, interface de sortie, gateway, distance administrative, priorité, poids.",
          "Routes dynamiques : apprises via protocoles (OSPF, BGP, RIP) — FortiGate supporte OSPF, BGP, RIP, IS-IS.",
          "Policy routes (routage basé sur des règles) : vérifiées AVANT la table de routage. Permettent de router selon la source, destination, protocole, interface d'entrée. Plus prioritaires que les routes statiques.",
          "Routes ISDB : si destination = objet ISDB, la route n'apparaît PAS dans la RIB standard."
        ]
      },
      {
        section: "ECMP (Equal Cost Multi-Path)",
        points: [
          "ECMP permet d'équilibrer la charge entre plusieurs routes de même coût.",
          "Conditions ECMP : même réseau de destination, même distance administrative, même métrique, même priorité (si routes statiques). L'interface de sortie peut être différente.",
          "Méthodes de balancement : Source IP, Destination IP, Source+Destination IP, Round Robin, Weighted (poids).",
          "Priorité Fortinet : attribut spécifique pour départager les routes statiques. Plus la valeur est faible, plus la priorité est haute."
        ]
      },
      {
        section: "RPF (Reverse Path Forwarding)",
        points: [
          "RPF est une protection anti-usurpation d'adresse IP (anti-spoofing).",
          "Vérifie si l'adresse source d'un paquet est potentiellement joignable via l'interface d'arrivée.",
          "S'applique uniquement sur le premier paquet d'une nouvelle session (ou après un changement de route).",
          "Mode Loose : la route retour doit exister (dans n'importe quelle interface).",
          "Mode Strict : la route retour doit exister ET être la meilleure route (interface de retour = interface d'arrivée)."
        ]
      }
    ],
    qcm: [
      {
        id: "ch4_q1",
        question: "Un administrateur crée une route statique vers le service 'Microsoft-Skype'. La route n'apparaît pas dans la table de routage. Quelle est la raison ?",
        options: [
          "L'interface de sortie est en mode DHCP, ce qui n'est pas autorisé pour une route statique.",
          "Les routes statiques ne sont pas affichées dans la table de routage FortiGate.",
          "Microsoft-Skype est un objet ISDB ; les routes ISDB ne sont pas insérées dans la table de routage standard.",
          "Il est impossible de créer une route statique vers ce service car il utilise plusieurs serveurs avec des IPs différentes."
        ],
        correct: [2],
        explanation: "Les routes vers des objets ISDB (Internet Service Database) ne sont pas insérées dans la RIB/FIB standard. Elles sont gérées différemment par le moteur de routage FortiGate."
      },
      {
        id: "ch4_q2",
        question: "Quelle condition NE DOIT PAS être respectée pour que l'ECMP s'applique ?",
        options: [
          "Même interface de sortie",
          "Même réseau de destination",
          "Même distance administrative",
          "Même priorité (routes statiques)"
        ],
        correct: [0],
        explanation: "Pour l'ECMP, il faut : même destination, même distance administrative, même métrique, même priorité. L'interface de sortie peut être DIFFÉRENTE — c'est justement l'intérêt de l'ECMP (équilibrer sur plusieurs chemins/interfaces)."
      },
      {
        id: "ch4_q3",
        question: "Quelle est l'utilité du RPF (Reverse Path Forwarding) ?",
        options: [
          "Chiffrer les paquets avant de les transmettre.",
          "Équilibrer la charge entre plusieurs routes de même coût.",
          "Protéger contre l'usurpation d'adresse IP (anti-spoofing) en vérifiant si l'adresse source est joignable.",
          "Accélérer la convergence du protocole de routage OSPF."
        ],
        correct: [2],
        explanation: "Le RPF vérifie qu'un paquet provient bien de là où son adresse source laisse à penser. Si l'adresse source n'est pas joignable via l'interface d'arrivée, le paquet est dropé. Protection contre les attaques par usurpation d'IP."
      },
      {
        id: "ch4_q4",
        question: "Quelle est la différence entre la RIB et la FIB ?",
        options: [
          "La RIB est pour IPv4, la FIB est pour IPv6.",
          "La RIB contient les meilleures routes actives. La FIB est la table du noyau réellement utilisée pour le forwarding (inclut RIB + entrées système).",
          "La FIB est visible dans la GUI, la RIB uniquement en CLI.",
          "La RIB et la FIB sont identiques, juste deux noms différents pour la même table."
        ],
        correct: [1],
        explanation: "RIB = Routing Information Base = table de routage avec les meilleures routes. FIB = Forwarding Information Base = table du noyau utilisée pour les lookups réels (route lookup). C'est la FIB qui compte pour le routage effectif des paquets."
      },
      {
        id: "ch4_q5",
        question: "Qu'est-ce qu'une Policy Route et quel est son avantage par rapport à une route statique ?",
        options: [
          "Une Policy Route est plus lente mais plus sécurisée qu'une route statique.",
          "Les Policy Routes sont vérifiées AVANT la table de routage. Elles permettent de router selon la source, destination, protocole, interface — pas uniquement la destination.",
          "Les Policy Routes ne s'appliquent qu'au trafic IPsec VPN.",
          "Une Policy Route ne peut pas utiliser de gateway, seulement une interface de sortie."
        ],
        correct: [1],
        explanation: "Policy Routes (routage basé sur des règles) : vérifiées avant la table de routage standard. Permettent de router selon des critères multiples (IP source, destination, protocole, interface d'entrée). Très utiles pour le routage asymétrique ou la QoS."
      },
      {
        id: "ch4_q6",
        question: "RPF Mode Loose vs Mode Strict : quelle différence ?",
        options: [
          "Loose vérifie que la route retour existe (toute interface). Strict vérifie que la route retour est la MEILLEURE route ET passe par l'interface d'arrivée.",
          "Loose est plus sécurisé que Strict.",
          "Strict ne vérifie rien, Loose vérifie tout.",
          "Il n'y a pas de différence fonctionnelle entre les deux modes."
        ],
        correct: [0],
        explanation: "RPF Loose : vérifie qu'une route retour existe (quelle que soit l'interface). RPF Strict : la route retour doit exister ET être la meilleure route passant par l'interface d'arrivée du paquet. Strict est plus restrictif mais peut causer des problèmes en routage asymétrique."
      }
    ],
    flashcards: [
      {
        id: "ch4_f1",
        question: "Qu'est-ce que l'ECMP et quelles sont ses conditions ?",
        answer: "ECMP (Equal Cost Multi-Path) : équilibrage de charge entre plusieurs routes de même coût. Conditions : même destination, même distance administrative, même métrique, même priorité (routes statiques). L'interface de sortie peut être différente. Méthodes : Source IP, Destination IP, Round Robin, Weighted."
      },
      {
        id: "ch4_f2",
        question: "Quelle est la différence entre RIB et FIB sur un FortiGate ?",
        answer: "RIB (Routing Info Base) = table de routage standard (meilleures routes actives). Visible en GUI. FIB (Forwarding Info Base) = table du noyau réellement utilisée pour le forwarding des paquets. Inclut RIB + entrées système. Visible uniquement en CLI : 'get router info kernel'."
      },
      {
        id: "ch4_f3",
        question: "Qu'est-ce que le RPF et ses deux modes ?",
        answer: "RPF (Reverse Path Forwarding) = anti-spoofing. Vérifie si l'adresse source d'un paquet est joignable. Mode Loose : la route retour doit exister (n'importe quelle interface). Mode Strict : la route retour doit exister ET passer par l'interface d'arrivée (la meilleure route). S'applique uniquement au premier paquet de session."
      },
      {
        id: "ch4_f4",
        question: "Pourquoi une route ISDB n'apparaît-elle pas dans la table de routage ?",
        answer: "Les routes vers des objets ISDB (Internet Service Database) ne sont pas insérées dans la RIB standard. Elles sont gérées par un mécanisme distinct du moteur de routage FortiGate. Cela permet à Fortinet de maintenir ces routes à jour automatiquement via FortiGuard."
      },
      {
        id: "ch4_f5",
        question: "Quelle est la priorité des types de routes sur un FortiGate ?",
        answer: "Ordre de priorité : 1) Policy Routes (vérifiées en PREMIER, avant tout) 2) Routes connectées (interfaces directement connectées) 3) Routes statiques / dynamiques (selon distance administrative). Les Policy Routes sont les plus prioritaires."
      }
    ],
    exercises: [
      {
        id: "ch4_e1",
        type: "qcm",
        question: "Vous avez deux connexions Internet (ISP1 et ISP2) avec des coûts égaux. Vous voulez que le trafic HTTP passe par ISP1 et le trafic HTTPS par ISP2. Quelle fonctionnalité utilisez-vous ?",
        options: [
          "ECMP avec Round Robin.",
          "Deux routes statiques avec la même métrique.",
          "Policy Routing (routage basé sur des règles) avec critère = service (protocole/port).",
          "RPF en mode Strict."
        ],
        correct: [2],
        explanation: "Policy Routing permet de router selon le protocole/port. Créer deux Policy Routes : l'une pour HTTP (TCP 80) → ISP1, l'autre pour HTTPS (TCP 443) → ISP2. L'ECMP équilibrerait la charge sans discriminer par type de trafic."
      },
      {
        id: "ch4_e2",
        type: "open",
        question: "Un utilisateur se plaint que sa session TCP est interrompue lors d'un basculement de route. Expliquez pourquoi et comment le comportement stateful du FortiGate intervient.",
        answer: "Le FortiGate est stateful : lors des 2 premiers paquets d'une session (aller + retour), il effectue un route lookup et stocke le résultat dans la table de sessions. Les paquets suivants utilisent la table de sessions (pas la table de routage). Si la route change, les entrées de session affectées sont invalidées → le FortiGate doit refaire un lookup → la session TCP peut être réinitialisée car les paquets arrivent via une nouvelle interface."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  ch5: {
    id: 5,
    title: "NAT",
    subtitle: "Network Address Translation",
    icon: "🔄",
    color: "#06b6d4",
    content: [
      {
        section: "Rappel NAT",
        points: [
          "SNAT (Source NAT) : traduit l'adresse IP source d'un paquet. Ex: IP privée → IP publique pour accéder à Internet.",
          "DNAT (Destination NAT) : traduit l'adresse IP de destination d'un paquet. Ex: IP publique → IP privée pour accéder à un serveur interne.",
          "PAT (Port Address Translation) : traduit adresse source + port source. Permet à plusieurs IPs privées de partager une seule IP publique (NAT overload).",
          "NAT64/NAT46 : interopérabilité IPv4 ↔ IPv6.",
          "NAPT : acronyme parfois utilisé pour désigner NAT + PAT ensemble."
        ]
      },
      {
        section: "Avantages et inconvénients du NAT",
        points: [
          "Avantage 1 : cohérence du schéma d'adressage interne (changement d'opérateur sans reconfiguration interne).",
          "Avantage 2 : économie d'adresses IPv4 publiques (plusieurs milliers de machines derrière une seule IP publique).",
          "Avantage 3 : sécurité — les adresses IP internes sont masquées de l'extérieur.",
          "Inconvénient 1 : dégradation des performances, notamment pour les applications temps réel (VoIP, gaming).",
          "Inconvénient 2 : certaines applications ne sont pas compatibles NAT (IPsec ESP sans NAT-T, SIP…).",
          "Inconvénient 3 : perte de traçabilité IP de bout en bout (forensique plus complexe).",
          "Inconvénient 4 : dépannage plus difficile (difficile de suivre un paquet subissant plusieurs traductions)."
        ]
      },
      {
        section: "Méthodes de configuration NAT sur FortiGate",
        points: [
          "Méthode 1 — Firewall Policy NAT mode : le NAT est configuré dans chaque règle de pare-feu individuellement. SNAT = adresse interface de sortie ou pool IP. DNAT = objet VIP (Virtual IP). Recommandé pour les petits réseaux avec peu de NAT.",
          "Méthode 2 — Central NAT mode : règles NAT centralisées séparées des règles de pare-feu. Lues dans l'ordre. Configuré par VDOM. Permet un contrôle précis de la translation de ports (NAPT). Recommandé pour les réseaux complexes avec beaucoup de règles NAT."
        ]
      },
      {
        section: "SNAT — Types de pools IP",
        points: [
          "Overload (PAT) : plusieurs hôtes internes partagent une ou plusieurs IPs publiques avec des ports différents. C'est le type le plus utilisé quand on n'a qu'une seule IP publique.",
          "One-to-One : chaque IP privée est traduite vers une IP publique dédiée (mapping 1:1). Nécessite autant d'IPs publiques que d'IPs privées.",
          "Fixed Port Range : plages de ports fixes attribuées par hôte source.",
          "Port Block Allocation : blocs de ports alloués par client."
        ]
      },
      {
        section: "DNAT — Objet VIP (Virtual IP)",
        points: [
          "Un objet VIP (Virtual IP) permet de faire du DNAT : il mappe une IP publique (ou une IP publique + port) vers une IP privée interne.",
          "Static NAT VIP : l'IP publique est entièrement mappée vers l'IP privée (tous les ports).",
          "Static NAT VIP with Port Forwarding : seul un port spécifique de l'IP publique est redirigé vers un port de l'IP privée. Ex: IP_publique:443 → 192.168.1.10:443 (serveur web HTTPS en DMZ).",
          "Port Forwarding : permet à des machines Internet d'accéder à un service spécifique d'un serveur à IP privée."
        ]
      }
    ],
    qcm: [
      {
        id: "ch5_q1",
        question: "L'interface de sortie de votre pare-feu périmétrique a une IP publique unique. Vous voulez que les employés puissent surfer sur Internet. Que mettez-vous en place ?",
        options: [
          "SNAT with port forwarding",
          "Static NAT VIP",
          "SNAT with IP pool Overload",
          "Double NAT : DNAT puis SNAT"
        ],
        correct: [2],
        explanation: "Avec une seule IP publique, on utilise SNAT avec un pool de type Overload (PAT). Plusieurs machines internes partagent l'unique IP publique avec des ports source différents. C'est la configuration standard pour la navigation Internet."
      },
      {
        id: "ch5_q2",
        question: "Un serveur web en DMZ a une IP privée (172.16.1.10). Vous voulez qu'il soit accessible depuis Internet sur le port HTTPS (443). Quelle solution utiliser ?",
        options: [
          "SNAT with IP pool Overload",
          "Static NAT VIP ou Static NAT VIP with Port Forwarding",
          "Double NAT CGN",
          "Fixed Port Range DNAT"
        ],
        correct: [1],
        explanation: "Pour qu'une machine externe puisse accéder à un serveur à IP privée, il faut du DNAT. On utilise un objet VIP : Static NAT VIP (mappe toute l'IP publique vers l'IP privée) ou Static NAT VIP with Port Forwarding (redirige uniquement le port 443 vers 172.16.1.10:443)."
      },
      {
        id: "ch5_q3",
        question: "Dans quel cas utilise-t-on le Central NAT mode plutôt que le Firewall Policy NAT mode ?",
        options: [
          "Dans les petits réseaux avec peu de règles NAT.",
          "Dans les réseaux complexes nécessitant de nombreuses règles NAT avec un contrôle précis de la translation de ports.",
          "Uniquement pour le NAT IPv6.",
          "Le Central NAT est toujours moins recommandé que le Policy NAT."
        ],
        correct: [1],
        explanation: "Central NAT : recommandé pour les réseaux complexes avec beaucoup de règles de pare-feu nécessitant du NAT. Permet un contrôle précis (traduction de ports, etc.) et centralise la gestion du NAT. Policy NAT : recommandé pour les petits réseaux simples."
      },
      {
        id: "ch5_q4",
        question: "Quelle est la différence entre SNAT One-to-One et SNAT Overload ?",
        options: [
          "One-to-One traduit plusieurs IPs privées vers une seule IP publique. Overload traduit une IP privée vers une IP publique.",
          "One-to-One mappe chaque IP privée vers une IP publique dédiée (1:1). Overload (PAT) permet à plusieurs IPs privées de partager une ou plusieurs IPs publiques via des ports différents.",
          "Il n'y a pas de différence, ce sont deux noms pour la même technique.",
          "Overload est moins sécurisé que One-to-One."
        ],
        correct: [1],
        explanation: "One-to-One : mapping 1:1 entre IP privée et IP publique (nécessite autant d'IPs publiques). Overload/PAT : de nombreuses IPs privées partagent une (ou quelques) IP(s) publique(s) grâce à des numéros de ports différents. C'est le mode le plus économe en adresses publiques."
      },
      {
        id: "ch5_q5",
        question: "Pourquoi le protocole IPsec ESP n'est-il pas compatible avec le PAT (Port Address Translation) ?",
        options: [
          "IPsec ESP n'utilise pas TCP/UDP, donc il n'y a pas de numéro de port à modifier.",
          "IPsec ESP chiffre l'en-tête IP, ce qui empêche la translation.",
          "IPsec ESP est uniquement compatible avec IPv6.",
          "Le FortiGate ne supporte pas IPsec ESP."
        ],
        correct: [0],
        explanation: "Le PAT traduit adresse IP + port. IPsec ESP (Encapsulating Security Payload) n'utilise pas TCP/UDP → pas de port → le NAT/PAT ne sait pas comment gérer plusieurs sessions ESP. Solution : NAT-T (NAT Traversal) encapsule ESP dans UDP (port 4500)."
      }
    ],
    flashcards: [
      {
        id: "ch5_f1",
        question: "SNAT vs DNAT vs PAT : définitions ?",
        answer: "SNAT : traduit l'IP source (LAN → Internet). DNAT : traduit l'IP destination (Internet → serveur DMZ). PAT (Port Address Translation) : traduit IP source + port source, permet à plusieurs machines de partager une IP publique. PAT est souvent appelé 'NAT overload'."
      },
      {
        id: "ch5_f2",
        question: "Avantages et inconvénients du NAT ?",
        answer: "Avantages : économie IPv4, masquage des IPs internes (sécurité), cohérence adressage interne. Inconvénients : dégradation des perfs temps réel, incompatibilité certaines apps (IPsec ESP), perte de traçabilité E2E, dépannage complexifié."
      },
      {
        id: "ch5_f3",
        question: "Qu'est-ce qu'un objet VIP et quand l'utilise-t-on ?",
        answer: "VIP (Virtual IP) = objet de DNAT sur FortiGate. Il mappe une IP publique (ou IP+port) vers une IP privée. Utilisé pour rendre accessible depuis Internet un service hébergé sur un serveur à IP privée (serveur web en DMZ, serveur mail…)."
      },
      {
        id: "ch5_f4",
        question: "Policy NAT vs Central NAT : quand utiliser chacun ?",
        answer: "Policy NAT (Firewall Policy) : NAT configuré dans chaque règle. Simple, pour petits réseaux avec peu de règles NAT. Central NAT : règles NAT centralisées séparées, contrôle précis des ports, configuré par VDOM. Pour réseaux complexes avec beaucoup de NAT."
      },
      {
        id: "ch5_f5",
        question: "Qu'est-ce que le NAT-T (NAT Traversal) et pourquoi est-il nécessaire ?",
        answer: "NAT-T encapsule le trafic IPsec ESP dans UDP (port 4500) pour qu'il puisse traverser un équipement NAT/PAT. Nécessaire car IPsec ESP n'a pas de port TCP/UDP, donc le PAT ne peut pas le gérer normalement. FortiGate supporte NAT-T."
      }
    ],
    exercises: [
      {
        id: "ch5_e1",
        type: "open",
        question: "Votre entreprise dispose d'une seule IP publique (70.70.70.70). Elle héberge un serveur web en DMZ (172.16.1.10:80) et 50 employés doivent accéder à Internet. Décrivez la configuration NAT nécessaire.",
        answer: "1) SNAT Overload (PAT) pour les 50 employés : règle de pare-feu LAN→WAN avec NAT activé, pool IP = Overload sur 70.70.70.70 → les 50 machines partagent l'IP publique. 2) DNAT pour le serveur web : objet VIP = Static NAT VIP with Port Forwarding : 70.70.70.70:80 → 172.16.1.10:80. Règle de pare-feu WAN→DMZ autorisant HTTP vers le VIP."
      },
      {
        id: "ch5_e2",
        type: "qcm",
        question: "Quelle est la cause d'une incompatibilité entre IPsec ESP et le PAT, et quelle solution existe ?",
        options: [
          "ESP chiffre les headers IP → solution : utiliser AH au lieu de ESP.",
          "ESP n'utilise pas de numéro de port TCP/UDP → le PAT ne peut pas multiplexer les sessions. Solution : NAT-T (encapsule ESP dans UDP port 4500).",
          "ESP n'est compatible qu'avec IPv6 → solution : migrer vers IPv6.",
          "Le PAT et ESP sont toujours compatibles, il n'y a pas de problème."
        ],
        correct: [1],
        explanation: "IPsec ESP utilise le protocole IP 50 (pas TCP/UDP), donc pas de numéro de port. Le PAT utilise les ports pour distinguer les sessions → incompatibilité. NAT-T (RFC 3948) résout cela en encapsulant ESP dans UDP/4500."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  ch6: {
    id: 6,
    title: "VPN IPsec & Chiffrement",
    subtitle: "Site-to-Site, IKE, Cryptographie",
    icon: "🔐",
    color: "#10b981",
    content: [
      {
        section: "Avantages et inconvénients du VPN",
        points: [
          "Avantages : confidentialité des données, intégrité des données, authentification des parties, protection contre le rejeu.",
          "Avantage : connexion sécurisée sur un réseau public non fiable (Internet).",
          "Inconvénients : surcoût de bande passante (overhead du chiffrement), latence accrue, complexité de configuration.",
          "VPN site-to-site : connecte deux réseaux/sous-réseaux entiers entre eux. Permanent."
        ]
      },
      {
        section: "Chiffrement symétrique",
        points: [
          "Une seule clé secrète partagée pour chiffrer ET déchiffrer.",
          "Avantages : très rapide, peu de ressources processeur.",
          "Inconvénients : problème de distribution sécurisée de la clé (comment partager la clé secrète sans qu'elle soit interceptée ?), n clés nécessaires pour n correspondants.",
          "Exemples : AES (128, 192, 256 bits), 3DES, DES (obsolète)."
        ]
      },
      {
        section: "Chiffrement asymétrique",
        points: [
          "Paire de clés : clé publique (partageable librement) + clé privée (secrète).",
          "Ce qui est chiffré avec la clé publique ne peut être déchiffré qu'avec la clé privée (et vice versa).",
          "L'algorithme génère lui-même la paire de clés.",
          "Avantages : pas de problème de distribution de clé secrète.",
          "Inconvénients : beaucoup plus lent que le chiffrement symétrique, nécessite plus de ressources.",
          "Exemples : RSA, ECC, DSA. En pratique : asymétrique pour l'échange de clés, symétrique pour les données."
        ]
      },
      {
        section: "Fonctions de hachage",
        points: [
          "Prend un message de taille quelconque en entrée, produit un condensat (hash) de taille fixe.",
          "Propriétés : déterministe, rapide, irréversible, résistant aux collisions, effet avalanche (1 bit changé → hash complètement différent).",
          "Applications : vérification d'intégrité, stockage de mots de passe, signature numérique.",
          "SHA-256 produit un condensat de 256 bits quelle que soit la taille du message.",
          "Collision : deux messages différents produisant le même hash (probabilité très faible).",
          "Exemples : SHA-256, SHA-384, SHA-512, MD5 (obsolète).",
          "HMAC : Hash-based Message Authentication Code — combine un hash avec une clé secrète pour garantir intégrité + authenticité."
        ]
      },
      {
        section: "Signature numérique et PKI",
        points: [
          "Signature numérique : le signataire chiffre le hash du document avec SA clé PRIVÉE. Le destinataire vérifie avec la clé PUBLIQUE du signataire.",
          "Garantit : intégrité (le document n'a pas été modifié), authenticité (c'est bien l'expéditeur), non-répudiation (l'expéditeur ne peut nier avoir signé).",
          "PKI (Public Key Infrastructure) : infrastructure de gestion des clés publiques et certificats.",
          "CA (Certificate Authority) : tiers de confiance qui délivre des certificats numériques.",
          "Certificat = clé publique + identité du propriétaire + signature de la CA.",
          "Certificat auto-signé : avantage = gratuit/rapide. Inconvénient = pas reconnu par les navigateurs → message d'avertissement."
        ]
      },
      {
        section: "IPsec — Protocoles et phases IKE",
        points: [
          "IPsec fournit : confidentialité (chiffrement), intégrité, authenticité, protection contre le rejeu.",
          "Protocoles IPsec : AH (Authentication Header, pas de chiffrement) et ESP (Encapsulating Security Payload, chiffrement + intégrité).",
          "IKE (Internet Key Exchange) : protocole d'établissement des SA IPsec. Port UDP 500 (NAT-T : UDP 4500).",
          "Phase 1 IKE : établissement d'un canal sécurisé (SA ISAKMP). Authentification via PSK ou certificats. Échange Diffie-Hellman.",
          "Phase 2 IKE : négociation des SA IPsec pour le trafic de données (algorithmes, durée de vie).",
          "SA (Security Association) : ensemble de paramètres cryptographiques négociés entre deux pairs.",
          "Diffie-Hellman : protocole d'échange de clés sur canal non sécurisé (pas d'échange de secret). La clé secrète partagée est calculée de chaque côté sans jamais être transmise.",
          "PFS (Perfect Forward Secrecy) : une nouvelle paire de clés DH est générée pour chaque session → compromission d'une clé n'affecte pas les sessions passées.",
          "Quick Mode Selectors (phase 2) : définissent quels flux de trafic seront protégés par le tunnel (ex: réseau 192.168.1.0/24 ↔ réseau 10.0.0.0/24)."
        ]
      }
    ],
    qcm: [
      {
        id: "ch6_q1",
        question: "De quoi dépend le degré de sécurité d'un algorithme de chiffrement ?",
        options: [
          "De la longueur du texte original et du nombre de caractères spéciaux.",
          "De la longueur de la clé, de la complexité de l'algorithme, de la fréquence de mise à jour des clés, et de la méthode de distribution des clés.",
          "Uniquement de la longueur de la clé.",
          "Du nombre de personnes connaissant l'algorithme."
        ],
        correct: [1],
        explanation: "La sécurité d'un algorithme dépend de : la longueur de la clé (plus longue = plus sûre), la complexité mathématique de l'algorithme, la fréquence de renouvellement des clés, et la méthode de distribution sécurisée des clés."
      },
      {
        id: "ch6_q2",
        question: "Quelles affirmations sont vraies concernant le chiffrement asymétrique ?",
        options: [
          "Il utilise la même clé pour chiffrer et déchiffrer, ce qui le rend plus rapide.",
          "L'algorithme génère lui-même la paire de clés. Les deux clés peuvent être des clés secrètes. Il est plus lent que le symétrique.",
          "Il est uniquement utilisé pour le chiffrement des données volumineuses.",
          "La clé publique doit rester secrète et ne jamais être partagée."
        ],
        correct: [1],
        explanation: "Chiffrement asymétrique : l'algorithme génère la paire de clés (pub/privée). Les deux clés peuvent être secrètes (la privée l'est toujours). C'est plus lent que le symétrique → utilisé pour l'échange de clés, pas pour les données."
      },
      {
        id: "ch6_q3",
        question: "Quelles sont les applications courantes des fonctions de hachage ?",
        options: [
          "Uniquement le chiffrement des données.",
          "Vérification d'intégrité des données, stockage sécurisé de mots de passe, signature numérique.",
          "Le routage des paquets réseau.",
          "L'authentification par mot de passe en clair."
        ],
        correct: [1],
        explanation: "Les fonctions de hachage servent à : vérifier l'intégrité (comparer le hash reçu au hash calculé), stocker les mots de passe de manière sécurisée (on stocke le hash, pas le mot de passe), et dans les signatures numériques (on signe le hash du document)."
      },
      {
        id: "ch6_q4",
        question: "Quelles affirmations concernant un VPN IPsec sont correctes ?",
        options: [
          "Il compresse les données pour améliorer les performances réseau.",
          "Il peut assurer confidentialité, intégrité, protection contre le rejeu. Il est possible de créer un tunnel sans chiffrement.",
          "Il améliore les performances en masquant les adresses IP.",
          "Il est obligatoirement en mode transport pour un VPN site-to-site."
        ],
        correct: [1],
        explanation: "IPsec assure : confidentialité (chiffrement ESP), intégrité (AH ou ESP), authentification, anti-rejeu. IPsec PEUT fonctionner sans chiffrement (AH uniquement). Il ajoute un overhead de bande passante (pas de compression). Mode tunnel = VPN site-to-site."
      },
      {
        id: "ch6_q5",
        question: "Quelles affirmations sur IKE (Internet Key Exchange) sont correctes ?",
        options: [
          "IKE utilise TCP/443, s'arrête après le tunnel établi, assure la confidentialité des données.",
          "IKE utilise UDP/500, établit et gère les SA, négocie les paramètres cryptographiques, utilise PSK ou certificats pour l'authentification.",
          "IKE utilise uniquement des clés prépartagées (PSK), pas de certificats.",
          "IKE est le protocole de chiffrement des données dans le tunnel IPsec."
        ],
        correct: [1],
        explanation: "IKE : UDP port 500 (NAT-T : UDP 4500). Établit et gère les Security Associations (SA). Négocie les paramètres cryptographiques. Authentification via PSK ou certificats. Ne chiffre pas les données du tunnel (c'est ESP/AH qui le font)."
      },
      {
        id: "ch6_q6",
        question: "Qu'est-ce que la Perfect Forward Secrecy (PFS) ?",
        options: [
          "Une technique qui stocke toutes les clés dans un coffre-fort numérique.",
          "Pour chaque nouvelle session, une nouvelle paire de clés Diffie-Hellman est générée. La compromission d'une clé ne compromet pas les sessions passées.",
          "PFS est un alias pour le chiffrement symétrique AES-256.",
          "PFS garantit que les données sont déchiffrées uniquement par le destinataire prévu."
        ],
        correct: [1],
        explanation: "PFS (Perfect Forward Secrecy) : à chaque session, de nouvelles clés DH sont générées indépendamment. Si une clé de session est compromise, les autres sessions (passées et futures) restent sécurisées. Renforce considérablement la sécurité des VPN."
      },
      {
        id: "ch6_q7",
        question: "Quelles méthodes d'authentification sont supportées lors de la phase 1 de IKE ?",
        options: [
          "Uniquement Diffie-Hellman.",
          "Pre-shared Key (PSK) et certificats numériques.",
          "RADIUS et LDAP uniquement.",
          "Authentification par adresse MAC."
        ],
        correct: [1],
        explanation: "La phase 1 de IKE supporte : Pre-Shared Key (PSK) — clé secrète partagée entre les deux pairs, et certificats numériques (X.509). Diffie-Hellman n'est pas une méthode d'authentification mais un algorithme d'échange de clés."
      },
      {
        id: "ch6_q8",
        question: "Quelles affirmations sur les certificats électroniques sont correctes ?",
        options: [
          "Ils expirent après 3 mois maximum. Ils sont délivrés uniquement par les gouvernements.",
          "Ils permettent d'authentifier l'identité d'un serveur/utilisateur. Ils contiennent une clé publique pour chiffrer ou vérifier une signature.",
          "Ils contiennent uniquement une clé privée.",
          "Ils servent exclusivement à la signature de documents."
        ],
        correct: [1],
        explanation: "Un certificat numérique contient : identité du propriétaire, clé publique, informations de validité, signature de la CA. Il permet d'authentifier des serveurs ou utilisateurs et de chiffrer des données ou vérifier des signatures. La durée de validité est définie par la CA (souvent 1-2 ans pour les certificats TLS)."
      }
    ],
    flashcards: [
      {
        id: "ch6_f1",
        question: "Symétrique vs Asymétrique : comparaison ?",
        answer: "Symétrique : une clé secrète pour chiffrer ET déchiffrer, très rapide, problème de distribution de clé. Ex: AES. Asymétrique : paire clé pub/privée, plus lent, pas de problème de distribution. Ex: RSA. En pratique : asymétrique pour l'échange de clés, symétrique pour les données (TLS hybride)."
      },
      {
        id: "ch6_f2",
        question: "Qu'est-ce qu'une fonction de hachage et ses propriétés ?",
        answer: "Fonction produisant un condensat (hash) de taille fixe à partir d'un message de taille quelconque. Propriétés : déterministe, irréversible (one-way), résistant aux collisions, effet avalanche (1 bit changé → hash complètement différent). Exemples : SHA-256 (256 bits), SHA-512."
      },
      {
        id: "ch6_f3",
        question: "Signature numérique : comment ça fonctionne ?",
        answer: "1) Alice calcule le hash de son document. 2) Alice chiffre le hash avec SA CLÉ PRIVÉE → c'est la signature. 3) Bob reçoit le document + la signature. 4) Bob déchiffre la signature avec la CLÉ PUBLIQUE d'Alice → obtient le hash. 5) Bob calcule lui-même le hash du document et compare. Si identique = intégrité + authenticité."
      },
      {
        id: "ch6_f4",
        question: "Phase 1 vs Phase 2 de IKE ?",
        answer: "Phase 1 : établit un canal sécurisé (SA ISAKMP). Authentification des pairs (PSK ou certificats). Échange Diffie-Hellman pour dériver les clés. Phase 2 (Quick Mode) : négocie les SA IPsec (ESP/AH, algorithmes, durée de vie). Définit les Quick Mode Selectors (quels réseaux passent dans le tunnel)."
      },
      {
        id: "ch6_f5",
        question: "Qu'est-ce que Diffie-Hellman et pourquoi est-il important ?",
        answer: "Protocole permettant à deux parties d'établir un secret partagé sur un canal non sécurisé sans jamais s'échanger de secret. Chaque partie fait des calculs avec sa clé privée et la clé publique de l'autre → arrivent au même résultat. Fondement de la sécurité IKE. Les groupes DH définissent la force (plus le numéro est élevé, plus c'est sécurisé)."
      },
      {
        id: "ch6_f6",
        question: "Qu'est-ce que la non-répudiation et la signature numérique la garantit-elle ?",
        answer: "Non-répudiation : impossibilité pour l'expéditeur de nier avoir envoyé un message. La signature numérique PEUT garantir la non-répudiation si la clé privée est bien protégée (seul le propriétaire peut signer). Cependant, si la clé privée est compromise, la non-répudiation est perdue."
      }
    ],
    exercises: [
      {
        id: "ch6_e1",
        type: "open",
        question: "Expliquez pourquoi dans TLS (HTTPS), on utilise à la fois le chiffrement asymétrique et symétrique.",
        answer: "TLS utilise une approche hybride : 1) Phase de handshake (asymétrique) : échange de clés via RSA ou DH/ECDHE pour dériver une clé de session de manière sécurisée sans jamais transmettre de secret. 2) Phase de données (symétrique) : les données sont chiffrées avec AES (la clé de session). Raison : le chiffrement asymétrique est trop lent pour chiffrer des données volumineuses. Le symétrique est rapide mais nécessite un échange de clé sécurisé → rôle de l'asymétrique."
      },
      {
        id: "ch6_e2",
        type: "qcm",
        question: "Lors de la configuration d'un VPN IPsec, un paramètre ne correspond pas entre les deux FortiGate. Que se passe-t-il ?",
        options: [
          "Le tunnel s'établit en mode dégradé.",
          "Le tunnel ne s'établit pas du tout. Tous les paramètres des deux côtés doivent être identiques.",
          "Le tunnel s'établit mais sans chiffrement.",
          "FortiGate négocie automatiquement le paramètre manquant."
        ],
        correct: [1],
        explanation: "IPsec est strict : si un seul paramètre (algorithme, groupe DH, durée de vie SA, réseau source/destination…) diffère entre les deux pairs, le tunnel ne s'établit pas. C'est pourquoi les templates sont utiles et la vérification systématique des paramètres est essentielle."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  ch7: {
    id: 7,
    title: "Inspection SSL/SSH",
    subtitle: "Déchiffrement du trafic chiffré",
    icon: "🔍",
    color: "#3b82f6",
    content: [
      {
        section: "Problématique du trafic chiffré",
        points: [
          "De plus en plus d'applications (>90% du trafic web) utilisent TLS/SSL (HTTPS).",
          "Les malwares peuvent se cacher dans des communications chiffrées → les pirates utilisent TLS pour exfiltrer des données ou livrer des malwares.",
          "Sans déchiffrement, impossible d'appliquer l'antivirus, l'IPS, ou le filtrage web sur le trafic chiffré.",
          "Trafic chiffré = boîte noire pour le pare-feu sans inspection SSL."
        ]
      },
      {
        section: "Méthode 1 : SSL Certificate Inspection",
        points: [
          "Ne déchiffre PAS le trafic. Inspecte uniquement les métadonnées du certificat SSL.",
          "Vérifie : validité du certificat (date d'expiration), autorité de certification (CA), nom de domaine (SNI), révocation (CRL/OCSP).",
          "Avantages : très rapide, peu de ressources, respect de la vie privée.",
          "Inconvénients : ne permet PAS de vérifier le contenu (virus, injection SQL…), protection limitée."
        ]
      },
      {
        section: "Méthode 2 : Full SSL Inspection (Deep Inspection)",
        points: [
          "Déchiffre le trafic SSL/TLS, inspecte le contenu, rechiffre avant de l'envoyer au client.",
          "Fonctionnement : le FortiGate se positionne en Man-in-the-Middle (MitM) entre le client et le serveur.",
          "Permet d'appliquer tous les profils de sécurité : antivirus, IPS, filtrage web, DLP…",
          "Inconvénients : plus lent, consomme plus de ressources CPU, latence accrue.",
          "Problème : le navigateur voit le certificat du FortiGate (pas du serveur) → message d'avertissement.",
          "Solution 1 : installer le certificat CA du FortiGate sur les terminaux clients.",
          "Solution 2 : exempter certains trafics de l'inspection (banques, sites médicaux, sites de confiance)."
        ]
      },
      {
        section: "Vérification du certificat par FortiGate",
        points: [
          "Validité de la date (pas expiré).",
          "Vérification de la CA (est-elle dans la liste des CA de confiance ?).",
          "Correspondance du nom de domaine (SNI vs CN/SAN du certificat).",
          "Statut de révocation (CRL ou OCSP).",
          "Certificats bloqués si non approuvés ou invalides (selon la politique configurée)."
        ]
      }
    ],
    qcm: [
      {
        id: "ch7_q1",
        question: "Quelle est la différence entre SSL Certificate Inspection et Full SSL Inspection ?",
        options: [
          "La Full Inspection est plus rapide et moins gourmande en ressources.",
          "SSL Certificate Inspection vérifie uniquement la validité du certificat sans déchiffrer. Full SSL Inspection déchiffre le trafic pour inspecter le contenu (AV, IPS…).",
          "SSL Certificate Inspection déchiffre le trafic. Full SSL Inspection ne le déchiffre pas.",
          "Les deux méthodes sont identiques, seul le nom change selon la version de FortiOS."
        ],
        correct: [1],
        explanation: "SSL Certificate Inspection = rapide, vérifie seulement les métadonnées du certificat, ne déchiffre pas. Full SSL Inspection = déchiffre le trafic (MitM), permet l'inspection complète (AV, IPS, Web Filter), plus lent et gourmand en ressources."
      },
      {
        id: "ch7_q2",
        question: "Pourquoi les utilisateurs voient-ils des avertissements de certificat après l'activation de la Full SSL Inspection ?",
        options: [
          "Le FortiGate bloque tous les certificats SSL par défaut.",
          "Le FortiGate se positionne en MitM et présente son propre certificat CA au client. Comme ce certificat n'est pas dans la liste des CA de confiance du navigateur, un avertissement s'affiche.",
          "La Full SSL Inspection désactive automatiquement HTTPS.",
          "Les avertissements indiquent que le site est malveillant."
        ],
        correct: [1],
        explanation: "En Full SSL Inspection, le FortiGate déchiffre et rechiffre → il présente au navigateur un certificat signé par SA PROPRE CA (pas par la CA originale du serveur). Si le certificat CA du FortiGate n'est pas dans les CA de confiance du navigateur → avertissement de sécurité."
      },
      {
        id: "ch7_q3",
        question: "Quelles sont les deux solutions pour éviter les avertissements de certificat lors de la Full SSL Inspection ?",
        options: [
          "Désactiver la Full SSL Inspection ou désactiver HTTPS.",
          "Installer le certificat CA du FortiGate sur les terminaux clients OU exempter certains trafics de l'inspection.",
          "Utiliser uniquement HTTP au lieu de HTTPS.",
          "Acheter un certificat wildcard pour le FortiGate."
        ],
        correct: [1],
        explanation: "Solution 1 : déployer le certificat CA du FortiGate sur les postes clients (via GPO dans un domaine Active Directory) → le navigateur fait confiance au FortiGate CA. Solution 2 : créer des exemptions pour les sites sensibles (banques, services de santé…) où l'inspection est indésirable."
      },
      {
        id: "ch7_q4",
        question: "Dans quel cas le filtrage web FortiGate ne fonctionnerait PAS efficacement sans configuration supplémentaire ?",
        options: [
          "Si l'utilisateur utilise un navigateur en mode incognito.",
          "Si le site web utilise HTTPS et que l'inspection SSL/SSH n'est pas activée, ou si l'utilisateur utilise un VPN pour contourner.",
          "Si l'utilisateur change son adresse IP.",
          "Si le site est hébergé sur un serveur avec plusieurs domaines."
        ],
        correct: [1],
        explanation: "Sans inspection SSL, le FortiGate ne peut pas lire l'URL complète des sites HTTPS (seulement le nom de domaine via SNI) → filtrage limité. Si l'utilisateur utilise un VPN tiers, le trafic est chiffré et bypasse le filtrage. Mode incognito n'affecte pas le filtrage au niveau du pare-feu."
      }
    ],
    flashcards: [
      {
        id: "ch7_f1",
        question: "SSL Certificate Inspection vs Full SSL Inspection ?",
        answer: "Certificate Inspection : rapide, peu de ressources, vérifie seulement les métadonnées du certificat (validité, CA, nom), ne déchiffre PAS. Full SSL Inspection : déchiffre le trafic (MitM), permet l'inspection complète (AV, IPS, Web Filter, DLP), plus lent, nécessite la distribution du CA FortiGate aux clients."
      },
      {
        id: "ch7_f2",
        question: "Que vérifie FortiGate lors de l'inspection d'un certificat SSL ?",
        answer: "1) Validité de la date (non expiré). 2) Émetteur (la CA est-elle de confiance ?). 3) Correspondance du nom de domaine (SNI = CN/SAN). 4) Statut de révocation (CRL/OCSP). Les certificats invalides ou non approuvés peuvent être bloqués selon la politique."
      },
      {
        id: "ch7_f3",
        question: "Pourquoi les malwares utilisent-ils HTTPS ?",
        answer: "HTTPS chiffre le trafic, rendant son contenu illisible sans déchiffrement. Les malwares l'utilisent pour : 1) Masquer les communications C&C (Command & Control). 2) Exfiltrer des données sans être détectés. 3) Télécharger des payloads malveillants. → La Full SSL Inspection est nécessaire pour contrer cela."
      }
    ],
    exercises: [
      {
        id: "ch7_e1",
        type: "qcm",
        question: "Votre politique de sécurité exige de scanner tous les fichiers téléchargés via HTTPS pour les virus. Quelle est la configuration nécessaire ?",
        options: [
          "Activer uniquement le profil antivirus dans la règle de pare-feu.",
          "Activer la Full SSL Inspection + un profil antivirus dans la règle de pare-feu, puis distribuer le CA FortiGate aux postes clients.",
          "Activer uniquement la SSL Certificate Inspection.",
          "Aucune configuration nécessaire, FortiGate scanne automatiquement tout le trafic."
        ],
        correct: [1],
        explanation: "Pour scanner les fichiers HTTPS : 1) Full SSL Inspection pour déchiffrer le trafic (sans ça, l'antivirus ne voit que du trafic chiffré). 2) Profil antivirus dans la règle. 3) Distribuer le CA FortiGate aux clients pour éviter les avertissements de certificat."
      },
      {
        id: "ch7_e2",
        type: "open",
        question: "Un employé de la banque signale qu'il voit un avertissement de certificat quand il accède au site de la banque centrale depuis son poste. La Full SSL Inspection est activée. Que faites-vous ?",
        answer: "Créer une exemption dans le profil SSL Inspection pour les sites bancaires. Sur FortiGate : dans le profil SSL/SSH Inspection, ajouter le domaine de la banque centrale dans les exemptions (ou utiliser la catégorie FortiGuard 'Finance and Banking'). Cela permet au trafic bancaire de passer sans interception, protégeant les données financières sensibles tout en maintenant la sécurité sur les autres sites."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  ch8: {
    id: 8,
    title: "Antivirus",
    subtitle: "Techniques antivirales FortiGate",
    icon: "🦠",
    color: "#f59e0b",
    content: [
      {
        section: "Pourquoi un antivirus sur le pare-feu ?",
        points: [
          "Protège les équipements sans AV installable : BYOD, matériel médical, photocopieurs, IoT…",
          "Scan en périphérie réseau : empêche la propagation des malwares au sein du réseau interne.",
          "Protège la réputation de l'IP publique de l'entreprise (empêche la distribution de malwares depuis l'IP de l'entreprise).",
          "Protège les utilisateurs WiFi guest qui ne sont pas sous contrôle de l'entreprise."
        ]
      },
      {
        section: "Analyse par signature",
        points: [
          "Signature virale : à l'origine = séquence de bits présente dans les malwares. Actuellement = peut être un hash, une combinaison d'attributs, des valeurs binaires à certains offsets.",
          "Principe : les signatures sont téléchargées dans une base de données sur l'équipement. L'antivirus scanne les fichiers et cherche une correspondance.",
          "Limites : ne détecte pas les malwares inconnus (zero-day), facilement contournée par obfuscation.",
          "Techniques d'obfuscation : chiffrement du malware, polymorphisme (le malware mute à chaque infection), métamorphisme (réécriture complète du code)."
        ]
      },
      {
        section: "Mode Proxy vs Mode Flow",
        points: [
          "Mode Proxy : bufferise le fichier entier avant de le scanner. Détection plus précise. Plus lent. L'utilisateur attend.",
          "Mode Flow (flux) : analyse les données à la volée, sans tout bufferiser. Plus rapide, moins précis. L'utilisateur voit arriver les données progressivement.",
          "Aucune partie du fichier n'est transmise en mode proxy tant que l'analyse n'est pas terminée.",
          "Mode flow peut analyser une partie du fichier avant de le transmettre partiellement."
        ]
      },
      {
        section: "Sandbox",
        points: [
          "Sandbox : environnement isolé où un fichier suspect est exécuté pour observer son comportement sans risque pour le système réel.",
          "Détecte les malwares polymorphes ou chiffrés qui échappent à l'analyse par signature.",
          "Techniques d'évasion sandbox : détecter l'environnement virtuel (vérification hardware), attendre longtemps avant d'agir, vérifier l'interaction utilisateur (clic, mouvement de souris).",
          "FortiGate peut s'intégrer avec FortiSandbox pour l'analyse comportementale."
        ]
      },
      {
        section: "Trafic scannable et protocoles",
        points: [
          "FortiGate peut scanner : HTTP, HTTPS (avec Full SSL Inspection), FTP, SMTP, POP3, IMAP, MAPI.",
          "FortiGate peut scanner les fichiers compressés (ZIP, RAR…) jusqu'à une certaine profondeur de décompression.",
          "Grayware : logiciels non sollicités (adware, spyware léger), pas dangereux mais indésirables (perte de productivité).",
          "Mise à jour des signatures : automatique via FortiGuard (service cloud Fortinet)."
        ]
      }
    ],
    qcm: [
      {
        id: "ch8_q1",
        question: "Mode Proxy vs Mode Flow pour l'antivirus FortiGate : quelle est la différence principale ?",
        options: [
          "Mode Proxy est plus rapide que le Mode Flow.",
          "Mode Proxy bufferise le fichier entier avant de scanner (plus précis, plus lent). Mode Flow analyse à la volée (plus rapide, moins précis).",
          "Mode Flow bloque tous les fichiers suspects automatiquement.",
          "Mode Proxy ne fonctionne que pour le trafic HTTP, Mode Flow pour tous les protocoles."
        ],
        correct: [1],
        explanation: "Mode Proxy : le fichier entier est bufferisé avant analyse → plus précis car on a le fichier complet, mais l'utilisateur attend. Mode Flow : analyse à la volée pendant la transmission → plus rapide, moins de mémoire, mais peut rater certains malwares car on n'a pas le fichier complet."
      },
      {
        id: "ch8_q2",
        question: "Pourquoi l'analyse par signature seule n'est-elle pas suffisante contre les malwares modernes ?",
        options: [
          "Les signatures sont trop grandes et ralentissent trop le réseau.",
          "Elle ne détecte pas les malwares inconnus (zero-day) et est contournable par polymorphisme, métamorphisme ou chiffrement.",
          "Les signatures antivirus expirent après 24h et doivent être renouvelées.",
          "L'analyse par signature fonctionne uniquement sur les fichiers PDF."
        ],
        correct: [1],
        explanation: "Limites de l'analyse par signature : ne détecte que les malwares CONNUS (dans la base), inefficace contre les zero-days. Contournements : polymorphisme (le malware mute sa signature), métamorphisme (réécriture du code), chiffrement (masque la signature), obfuscation."
      },
      {
        id: "ch8_q3",
        question: "Qu'est-ce qu'une sandbox antivirus et quelles sont ses techniques d'évasion ?",
        options: [
          "La sandbox est un réseau isolé pour les tests. Elle ne peut pas être contournée.",
          "Environnement d'exécution isolé pour observer le comportement des malwares. Techniques d'évasion : détecter la VM, attendre longtemps, vérifier l'interaction utilisateur.",
          "La sandbox est un type de firewall spécialisé dans la détection des rootkits.",
          "La sandbox analyse uniquement les fichiers .exe."
        ],
        correct: [1],
        explanation: "Sandbox : exécute les fichiers suspects dans un environnement isolé pour observer leur comportement réel. Évasion : le malware vérifie s'il est dans une VM (registry, hardware), attend un délai (timeout sandbox), vérifie les interactions utilisateur (clic, souris) avant d'agir."
      }
    ],
    flashcards: [
      {
        id: "ch8_f1",
        question: "Pourquoi mettre un antivirus sur un pare-feu (et pas seulement sur les postes) ?",
        answer: "Protège : 1) Les équipements sans AV possible (BYOD, IoT, matériel médical, photocopieurs). 2) Réseau WiFi guest (pas sous contrôle IT). 3) Empêche la propagation interne. 4) Protège la réputation IP publique. C'est une défense en profondeur : AV firewall + AV poste = 2 couches."
      },
      {
        id: "ch8_f2",
        question: "3 limites de l'analyse par signature ?",
        answer: "1) Ne détecte pas les malwares inconnus/zero-day (pas encore dans la base). 2) Contournable par polymorphisme (mutation de la signature). 3) Contournable par métamorphisme (réécriture complète du code) ou chiffrement du malware."
      },
      {
        id: "ch8_f3",
        question: "Mode Proxy vs Mode Flow antivirus ?",
        answer: "Proxy : bufferise tout le fichier → analyse complète → plus précis, utilisateur attend, consomme de la mémoire. Flow : analyse à la volée → plus rapide, moins de mémoire, mais peut rater des malwares (fichier partiellement transmis avant fin d'analyse)."
      }
    ],
    exercises: [
      {
        id: "ch8_e1",
        type: "qcm",
        question: "Un malware chiffre son propre code à chaque exécution pour modifier sa signature. Quelle technique utilise-t-il et quelle contre-mesure FortiGate peut l'aider ?",
        options: [
          "Obfuscation simple — contre-mesure : antivirus standard.",
          "Polymorphisme — contre-mesure : sandbox (analyse comportementale plutôt que par signature).",
          "Rootkit — contre-mesure : filtrage web.",
          "Phishing — contre-mesure : email filter."
        ],
        correct: [1],
        explanation: "Le polymorphisme permet au malware de modifier sa signature à chaque infection, contournant l'antivirus à base de signatures. La sandbox exécute le fichier suspect dans un environnement isolé et observe son COMPORTEMENT (actions système, connexions réseau…) indépendamment de sa signature."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  ch9: {
    id: 9,
    title: "Filtrage Web",
    subtitle: "Web & DNS Filtering",
    icon: "🌐",
    color: "#0ea5e9",
    content: [
      {
        section: "Intérêts du filtrage web",
        points: [
          "Préserver les ressources : éviter la mauvaise utilisation de la bande passante (streaming, téléchargement).",
          "Préserver la productivité : bloquer les réseaux sociaux, jeux en ligne pendant les heures de travail.",
          "Réduire l'exposition aux menaces : empêcher l'accès aux sites infectés, sites de phishing.",
          "Prévenir l'exfiltration de données : empêcher l'accès aux sites de partage non autorisés.",
          "Respect légal : prévenir la violation du droit d'auteur, conformité RGPD.",
          "Protection des mineurs : dans les établissements scolaires."
        ]
      },
      {
        section: "Filtrage DNS",
        points: [
          "Agit au niveau DNS (avant même la connexion HTTP/HTTPS).",
          "Bloque dès la résolution DNS : si le domaine est catégorisé comme malveillant, la réponse DNS est bloquée/modifiée.",
          "Avantages par rapport au filtrage web : plus léger (pas d'inspection du contenu), réduit la charge sur le pare-feu, améliore la latence, peut filtrer tout type de trafic (même FTP si le nom de domaine est résolu).",
          "Inconvénients : moins précis (filtre sur le domaine entier, pas sur des pages spécifiques).",
          "FortiGuard propose la catégorisation DNS."
        ]
      },
      {
        section: "Filtrage Web (URL) — Deux modes",
        points: [
          "Mode Proxy : bufferise la requête HTTP complète, inspecte l'URL complète (chemin + paramètres), plus précis, plus de latence.",
          "Mode Flow : inspecte à la volée, moins précis sur les URLs dynamiques, plus rapide.",
          "FortiGuard Web Filtering : requête envoyée à FortiGuard pour catégoriser l'URL en temps réel.",
          "Filtres URL statiques : liste manuelle d'URLs/domaines à bloquer ou autoriser (expressions régulières, wildcards).",
          "Catégories : Social Networks, Adult Content, Gambling, Malicious Sites, etc."
        ]
      },
      {
        section: "Limites du filtrage web",
        points: [
          "HTTPS sans Full SSL Inspection : FortiGate ne peut lire que le SNI (nom de domaine) mais pas l'URL complète → filtrage limité aux domaines.",
          "VPN tiers utilisateur : le trafic passe chiffré à travers le pare-feu → contourne le filtrage.",
          "Site hébergé sur serveur mutualisé : plusieurs domaines sur une même IP → risque de sur-blocage ou sous-blocage.",
          "Mode incognito : n'affecte PAS le filtrage au niveau du pare-feu (le trafic passe quand même par le FortiGate)."
        ]
      }
    ],
    qcm: [
      {
        id: "ch9_q1",
        question: "Quels sont les avantages du filtrage DNS par rapport au filtrage Web ?",
        options: [
          "Le filtrage DNS est plus précis, il analyse le contenu des pages.",
          "Le filtrage DNS est plus léger (pas d'inspection du contenu), réduit la charge sur le pare-feu. Il peut aussi filtrer le trafic FTP (résolution DNS du domaine FTP).",
          "Le filtrage DNS ne nécessite aucune licence FortiGuard.",
          "Le filtrage DNS est toujours plus efficace que le filtrage Web."
        ],
        correct: [1],
        explanation: "Avantage DNS : très léger (pas d'inspection de contenu), agit avant même la connexion, peut filtrer tout protocole utilisant un nom de domaine (FTP, SMTP…). Limite DNS : pas de filtrage par page/URL, seulement par domaine entier."
      },
      {
        id: "ch9_q2",
        question: "Dans quel cas le filtrage web FortiGate ne fonctionnerait-il PAS efficacement sans configuration supplémentaire ?",
        options: [
          "Si l'utilisateur utilise un navigateur en mode incognito.",
          "Si le site utilise HTTPS sans inspection SSL/SSH activée, ou si l'utilisateur utilise un VPN pour contourner.",
          "Si l'utilisateur change son adresse IP.",
          "Si le site est hébergé en France."
        ],
        correct: [1],
        explanation: "HTTPS sans Full SSL Inspection : FortiGate ne peut lire que le SNI, pas l'URL → filtrage par domaine seulement. VPN utilisateur : le trafic sort chiffré du FortiGate vers le serveur VPN → impossible à inspecter. Mode incognito n'affecte pas le filtrage côté pare-feu."
      }
    ],
    flashcards: [
      {
        id: "ch9_f1",
        question: "DNS Filtering vs Web Filtering : différences clés ?",
        answer: "DNS Filtering : agit lors de la résolution DNS (avant la connexion), très léger, filtre par domaine. Web Filtering : inspecte les requêtes HTTP/HTTPS, filtre par URL complète, plus précis mais plus lourd. Idéal : combiner les deux — DNS filter comme premier filet léger, Web filter pour la précision."
      },
      {
        id: "ch9_f2",
        question: "Pourquoi le mode incognito ne contourne-t-il pas le filtrage web FortiGate ?",
        answer: "Le mode incognito empêche le navigateur de stocker l'historique localement, mais le trafic réseau passe TOUJOURS par le FortiGate. Le pare-feu voit le trafic identiquement qu'en mode normal. Le mode incognito ne cache rien au réseau, seulement au navigateur local."
      },
      {
        id: "ch9_f3",
        question: "Quelles sont les limites du filtrage web HTTPS sans inspection SSL ?",
        answer: "Sans Full SSL Inspection, FortiGate ne voit que : le SNI (Server Name Indication = nom de domaine) dans le ClientHello TLS. Il ne voit PAS l'URL complète (chemin, paramètres) ni le contenu. Filtrage limité aux domaines (ex: peut bloquer google.com mais pas google.com/recherche-malveillante)."
      }
    ],
    exercises: [
      {
        id: "ch9_e1",
        type: "open",
        question: "Une entreprise veut bloquer YouTube pendant les heures de bureau (9h-18h) mais permettre l'accès le soir et le weekend. Décrivez la configuration FortiGate.",
        answer: "1) Créer un objet Schedule : 'Heures_Bureau' = Lundi-Vendredi 09h00-18h00. 2) Créer un profil Web Filter avec la catégorie 'Video Streaming' bloquée. 3) Créer une règle de pare-feu : Source=LAN, Destination=ALL, Service=HTTP/HTTPS, Schedule='Heures_Bureau', Security Profile=Web Filter (YouTube bloqué), Action=Accept. La règle deny YouTube sera active seulement pendant les heures configurées. Le reste du temps, une règle plus générale autorise l'accès."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  ch10: {
    id: 10,
    title: "Pentest — Phase 1 : Pre-engagement",
    subtitle: "Cadre légal, contractuel & organisationnel",
    icon: "📝",
    color: "#ec4899",
    content: [
      {
        section: "Définitions fondamentales",
        points: [
          "Pentest (test d'intrusion) : simulation d'une attaque réelle autorisée pour identifier les vulnérabilités d'un système.",
          "Audit de sécurité : évaluation plus large de la posture de sécurité (processus, conformité, technique).",
          "Différence : le pentest simule une attaque, l'audit évalue la conformité et les contrôles en place.",
          "Sans autorisation écrite = piratage (crime). Le pentester doit toujours avoir un contrat."
        ]
      },
      {
        section: "Types de pentest",
        points: [
          "Goal-based : objectif précis (tester une application avant mise en prod, évaluer une acquisition).",
          "Compliance-based : vérifier la conformité à une norme (PCI DSS, ISO 27001). Souvent imposé par la norme.",
          "Red Team : simule des scénarios d'attaques crédibles, teste les réactions des équipes défensives (Blue Team). Plus ciblé, pas exhaustif.",
          "White Box : le pentesteur a toutes les informations sur l'infrastructure cible.",
          "Grey Box : informations partielles (ex: accès utilisateur normal).",
          "Black Box : aucune information sur la cible (simule un attaquant externe)."
        ]
      },
      {
        section: "Phase de pré-engagement : points importants",
        points: [
          "Objectif : établir un cadre légal, technique et organisationnel validé par les deux parties.",
          "Clauses de confidentialité (NDA) : les informations découvertes restent confidentielles.",
          "Définir clairement : quels systèmes peuvent être testés (scope/scoping).",
          "Définir les techniques autorisées : les équipes défensives peuvent-elles réagir ? Attaques DoS/destructives autorisées ? Phishing du personnel autorisé ?",
          "Définir les horaires : quand les tests peuvent-ils être effectués ?",
          "Canaux de communication sécurisés : comment contacter le client en urgence ?",
          "Procédure en cas d'incident : que faire si un vrai incident survient pendant le test ?",
          "Budget : coût de la prestation."
        ]
      },
      {
        section: "Scoping (définir le périmètre)",
        points: [
          "Quels systèmes, réseaux ou services sont dans le scope ? Lesquels sont exclus (out of scope) ?",
          "Quelles autorisations le pentesteur doit-il avoir (accès physique, comptes utilisateurs…) ?",
          "Existe-t-il des informations/systèmes auxquels le prestataire ne doit pas accéder (données sensibles, RGPD…) ?",
          "Le client doit donner une autorisation ÉCRITE au pentesteur. Écart du contrat = illégal."
        ]
      }
    ],
    qcm: [
      {
        id: "ch10_q1",
        question: "Quelle est la différence entre un pentest white box, grey box et black box ?",
        options: [
          "White box = test de nuit, Grey box = test de jour, Black box = test le weekend.",
          "White box = toutes les infos sur la cible, Grey box = infos partielles, Black box = aucune info (simule un attaquant externe).",
          "Les trois sont identiques, seul la couleur de l'interface change.",
          "Black box est toujours plus efficace que White box."
        ],
        correct: [1],
        explanation: "White box : le pentesteur connaît l'architecture complète (code source, IPs, credentials…) → test approfondi. Grey box : informations partielles (ex: compte utilisateur normal). Black box : aucune info → simule un attaquant extérieur, mais moins efficace pour trouver toutes les vulnérabilités."
      },
      {
        id: "ch10_q2",
        question: "Pourquoi la phase de pré-engagement est-elle si critique dans un pentest ?",
        options: [
          "Elle permet au pentesteur de facturer plus cher.",
          "Sans cadre contractuel clair, le pentesteur n'a pas d'autorisation légale et risque des poursuites judiciaires. Le scope mal défini peut mener à des incidents graves.",
          "La phase de pré-engagement est juste une formalité administrative sans importance technique.",
          "Elle permet d'installer les outils de test à l'avance."
        ],
        correct: [1],
        explanation: "Sans pré-engagement : le pentesteur n'a pas d'autorisation légale (= piratage). Un scope mal défini peut conduire à tester des systèmes exclus (partenaires, systèmes critiques) ou causer des interruptions de service. La clarté contractuelle protège les deux parties."
      },
      {
        id: "ch10_q3",
        question: "Qu'est-ce qu'un pentest de type Red Team ?",
        options: [
          "Un test réalisé uniquement par des hackers portant des vêtements rouges.",
          "Un test simulant des scénarios d'attaques crédibles pour tester les réactions des équipes de défense (Blue Team). Plus ciblé, pas exhaustif.",
          "Un test de conformité aux normes de sécurité.",
          "Un test automatisé réalisé par des outils de scan."
        ],
        correct: [1],
        explanation: "Red Team : simule une attaque ciblée réaliste (comme un APT ou un attaquant sophistiqué) pour tester non seulement la sécurité technique mais aussi les processus de détection et réponse aux incidents de la Blue Team. Complémentaire au pentest classique mais pas conçu pour être exhaustif."
      }
    ],
    flashcards: [
      {
        id: "ch10_f1",
        question: "5 points importants à définir lors du pré-engagement ?",
        answer: "1) Scope : quels systèmes sont testés / exclus. 2) Type de test (white/grey/black box). 3) Techniques autorisées (DoS ? Phishing des employés ? Réaction de la défense ?). 4) Horaires : quand tester. 5) Canaux de communication sécurisés + procédure d'urgence. + Budget, NDA, autorisation écrite."
      },
      {
        id: "ch10_f2",
        question: "Types de pentest : goal-based, compliance-based, red team ?",
        answer: "Goal-based : objectif précis (tester une nouvelle app). Compliance-based : vérifier conformité à une norme (PCI DSS, ISO 27001). Red Team : simuler une attaque réaliste, tester la réaction de la Blue Team. Red Team ≠ exhaustif, il est ciblé."
      },
      {
        id: "ch10_f3",
        question: "Quelle est la frontière entre pentest et piratage ?",
        answer: "L'autorisation écrite. Avec un contrat signé définissant le scope = pentest légal. Sans contrat ou hors scope = piratage (crime informatique). Le pentesteur doit rester strictement dans les limites définies. Même une bonne intention ne protège pas légalement sans autorisation."
      }
    ],
    exercises: [
      {
        id: "ch10_e1",
        type: "open",
        question: "Un client vous demande de tester 'son infrastructure réseau'. Sans autre précision, comment procédez-vous lors de la phase de pré-engagement ?",
        answer: "Il faut définir précisément : 1) Le scope : quelles IPs, domaines, systèmes sont dans/hors périmètre. 2) Le type de test (black/grey/white box). 3) Les techniques autorisées (scan de ports ? Exploit ? Ingénierie sociale ? DoS ?). 4) Les horaires (production = test hors heures ouvrées ?). 5) Point de contact d'urgence. 6) Que faire si un vrai incident est découvert. 7) NDA + autorisation écrite signée. Sans ces éléments, je ne commence pas le test."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  ch11: {
    id: 11,
    title: "Pentest — Phase 2 : Intelligence Gathering",
    subtitle: "OSINT & Collecte d'informations",
    icon: "🕵️",
    color: "#6366f1",
    content: [
      {
        section: "Objectifs et terminologie",
        points: [
          "Intelligence Gathering = rassembler un maximum d'informations sur la cible avant d'attaquer.",
          "Autres termes : reconnaissance, footprinting, information gathering.",
          "But : identifier les systèmes, leurs caractéristiques, les employés, l'infrastructure → dresser une liste de cibles priorisées.",
          "Informations utiles : sites web, employés (qui fait quoi), FAI, IPs publiques des serveurs, logiciels utilisés, adresses email, sous-domaines…"
        ]
      },
      {
        section: "Trois types de reconnaissance",
        points: [
          "Reconnaissance PASSIVE : aucune interaction directe avec la cible. Sources publiques (réseaux sociaux, WHOIS, DNS, certificats SSL…). Plus difficile d'obtenir des infos mais idéal pour ne pas être détecté.",
          "Reconnaissance SEMI-PASSIVE : interaction avec la cible via des méthodes ressemblant à du trafic normal (navigation sur le site web du client, requêtes DNS normales). Pas de scan de ports ni de force brute.",
          "Reconnaissance ACTIVE : interaction directe (scan de ports, scanners de vulnérabilités, nmap). Détectable par les systèmes de défense. Clairement identifiable comme comportement suspect."
        ]
      },
      {
        section: "OSINT (Open Source Intelligence)",
        points: [
          "OSINT = Renseignement d'Origine Source Ouverte — collecte d'informations via sources librement accessibles.",
          "Sources OSINT : sites web, réseaux sociaux, registres DNS (WHOIS), certificats SSL (crt.sh), LinkedIn, Shodan, Google Dorks, offres d'emploi (révèlent les techno utilisées)…",
          "Utilisations : cybersécurité offensive (reconnaissance), défensive (trouver ses propres vulnérabilités exposées), journalisme, RH, juridique.",
          "Les infos OSINT peuvent rendre plus crédibles les attaques d'ingénierie sociale."
        ]
      },
      {
        section: "Outils de reconnaissance",
        points: [
          "Outils passifs : WHOIS, Shodan, Maltego, theHarvester, Recon-ng, crt.sh, Google Dorks, LinkedIn.",
          "Outils actifs : Nmap (scan de ports et services), Nessus/OpenVAS (scanners de vulnérabilités), Nikto (scanner web), DirBuster (énumération web).",
          "Nmap : commandes importantes — -sS (SYN scan), -sV (version des services), -O (détection OS), -oX (sortie XML), -T0 à -T5 (vitesse de scan), -6 (IPv6), --script (NSE scripts)."
        ]
      },
      {
        section: "Nmap — Commandes essentielles",
        points: [
          "Découverte d'hôtes : nmap -sn 192.168.1.0/24 (ping scan), nmap -Pn 192.168.1.0/24 (sans ping), nmap -6 2001:a:b:c::/64 (IPv6).",
          "Scan de ports : nmap -sS target (SYN scan), nmap -sU target (UDP), nmap -p 80,443 target.",
          "Identification OS + services : nmap -sV -O target.",
          "Sauvegarde en XML : nmap -oX fichier.xml target.",
          "Scan lent et discret : nmap -sS -T0 target (très lent = moins détectable)."
        ]
      }
    ],
    qcm: [
      {
        id: "ch11_q1",
        question: "Quelle est la différence entre reconnaissance passive, semi-passive et active ?",
        options: [
          "Passive = avec outils, semi-passive = manuelle, active = automatisée.",
          "Passive = aucune interaction avec la cible (sources publiques), semi-passive = interaction ressemblant au trafic normal, active = interaction directe détectable (scan de ports).",
          "La reconnaissance passive est illégale, la semi-passive est légale, l'active est optionnelle.",
          "Active est plus discrète que passive car elle mime le trafic utilisateur."
        ],
        correct: [1],
        explanation: "Passive : aucun trafic vers la cible (WHOIS, réseaux sociaux…) → indétectable. Semi-passive : trafic ressemblant à un utilisateur normal (naviguer sur le site). Active : scans, énumération → détectable par un IPS/IDS, clairement identifiable comme activité suspecte."
      },
      {
        id: "ch11_q2",
        question: "Quelle commande Nmap utiliser pour un SYN scan très lent afin de diminuer les chances de détection ?",
        options: [
          "nmap -sU -T5 target",
          "nmap -sS -T0 target",
          "nmap -sV -O target",
          "nmap -oX target"
        ],
        correct: [1],
        explanation: "-sS : SYN scan (scan stealth, plus discret que TCP connect scan). -T0 : timing 'paranoid' (très lent, moins détectable par les IDS/IPS). T0 = délai entre les paquets très important. T5 = agressif (rapide mais très détectable)."
      },
      {
        id: "ch11_q3",
        question: "Citez 5 exemples d'informations à rechercher lors d'une collecte OSINT.",
        options: [
          "Couleur du bureau, heure de déjeuner, marque du café, température de la salle serveur, couleur des murs.",
          "Adresses IP publiques des serveurs, adresses email des employés, technologies utilisées (stack web), sous-domaines, FAI et ASN.",
          "Mots de passe des employés, codes PIN, coordonnées bancaires, numéros de sécurité sociale.",
          "Configuration des routeurs internes, schéma de câblage, plans des bureaux."
        ],
        correct: [1],
        explanation: "OSINT typique : IPs publiques (Shodan, whois), emails (theHarvester, LinkedIn), technologies (cookies, headers HTTP, offres d'emploi révèlent le stack), sous-domaines (crt.sh, subfinder), FAI/ASN (whois IP), nom de domaine registrar, historique DNS."
      },
      {
        id: "ch11_q4",
        question: "Quelle commande Nmap utiliser pour identifier les services et le système d'exploitation d'une machine cible ?",
        options: [
          "nmap -sn target",
          "nmap -oX target",
          "nmap -sV -O target",
          "nmap -T0 target"
        ],
        correct: [2],
        explanation: "-sV : détection des versions des services (quel serveur web, quelle version d'OpenSSH…). -O : détection du système d'exploitation via les fingerprints TCP/IP. Combiné : nmap -sV -O target → information maximale sur la cible."
      }
    ],
    flashcards: [
      {
        id: "ch11_f1",
        question: "3 types de reconnaissance et leurs caractéristiques ?",
        answer: "Passive : aucune interaction avec la cible, sources publiques (WHOIS, réseaux sociaux, Shodan), indétectable mais infos limitées. Semi-passive : interaction légère ressemblant au trafic normal (navigation web). Active : scans, énumération → détectable, fournit le plus d'infos (scan nmap, vulnérabilités)."
      },
      {
        id: "ch11_f2",
        question: "5 outils passifs OSINT ?",
        answer: "1) WHOIS (info domaine/IP). 2) Shodan (moteur de recherche équipements connectés). 3) theHarvester (emails, noms, IPs). 4) crt.sh (certificats SSL → sous-domaines). 5) Google Dorks (recherches avancées Google). + Maltego, Recon-ng, LinkedIn."
      },
      {
        id: "ch11_f3",
        question: "5 commandes Nmap essentielles ?",
        answer: "1) nmap -sn 192.168.1.0/24 (ping scan, découverte d'hôtes). 2) nmap -sS target (SYN scan). 3) nmap -sV -O target (versions + OS). 4) nmap -oX fichier.xml target (sortie XML). 5) nmap -sS -T0 target (scan très lent/discret). 6) nmap -6 2001:a:b:c::/64 (IPv6)."
      },
      {
        id: "ch11_f4",
        question: "Qu'est-ce que l'OSINT et ses utilisations légitimes ?",
        answer: "OSINT (Open Source INTelligence) : collecte d'infos via sources librement accessibles. Utilisations : cybersécurité offensive (reconnaissance pentest), défensive (trouver ses propres fuites), journalisme (vérification de faits), RH (vérification antécédents), juridique (preuves publiques). Toutes légales si les sources sont publiques."
      }
    ],
    exercises: [
      {
        id: "ch11_e1",
        type: "open",
        question: "Lors d'une collecte OSINT sur une entreprise, vous trouvez une offre d'emploi cherchant 'un administrateur Cisco ASA 9.x et Palo Alto PA-5200'. Quelle information utile cela révèle-t-il pour un pentest ?",
        answer: "L'offre d'emploi révèle : 1) La marque et modèle des pare-feux utilisés (Cisco ASA 9.x → versions spécifiques avec des CVE connus, Palo Alto PA-5200). 2) Le niveau de compétences IT (ils ont des équipements enterprise-grade → bonne maturité sécurité). 3) Potentielles vulnérabilités : rechercher les CVE connus pour ASA 9.x. C'est une technique OSINT classique : les offres d'emploi révèlent involontairement le stack technologique d'une entreprise."
      },
      {
        id: "ch11_e2",
        type: "qcm",
        question: "Vous commencez un pentest black box. Quelle est la première approche recommandée ?",
        options: [
          "Lancer immédiatement un scan nmap agressif sur toute l'infrastructure.",
          "Commencer par la reconnaissance passive (WHOIS, OSINT, DNS) pour collecter le maximum d'infos sans être détecté, puis passer progressivement à des méthodes plus actives.",
          "Envoyer des emails de phishing à tous les employés dès le premier jour.",
          "Demander les mots de passe administrateurs au client."
        ],
        correct: [1],
        explanation: "Bonne pratique : commencer par la reconnaissance passive (discret, beaucoup d'infos utiles). Ensuite semi-passive, puis active. Cela permet de : cartographier l'infrastructure sans alerter les défenses, prioriser les cibles, et planifier les attaques plus ciblées. Un scan nmap immédiat et agressif déclenche les alertes IDS."
      }
    ]
  }

}; // fin CHAPTERS

// ─────────────────────────────────────────────────────────────
// Fonction utilitaire : récupère toutes les questions QCM de tous les chapitres
function getAllQCM() {
  return Object.values(CHAPTERS).flatMap(ch => 
    (ch.qcm || []).map(q => ({ ...q, chapterId: ch.id, chapterTitle: ch.title }))
  );
}

// Récupère toutes les flashcards de tous les chapitres
function getAllFlashcards() {
  return Object.values(CHAPTERS).flatMap(ch => 
    (ch.flashcards || []).map(f => ({ ...f, chapterId: ch.id, chapterTitle: ch.title }))
  );
}

// Récupère tous les exercices de tous les chapitres
function getAllExercises() {
  return Object.values(CHAPTERS).flatMap(ch => 
    (ch.exercises || []).map(e => ({ ...e, chapterId: ch.id, chapterTitle: ch.title }))
  );
}
