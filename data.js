const questions = [
  {
    Q: "Examinez la configuration spanning tree suivante sur un FortiGate en mode transparent. config system interface / edit 'nom de l'interface' / set stp-forward enable / end. Quelle affirmation est correcte pour la configuration ci-dessus ?",
    R: [
      "La FortiGate participe à spanning tree.",
      "Le dispositif FortiGate transmet les messages spanning tree reçus.",
      "Des boucles de couche 2 Ethernet sont susceptibles de se produire.",
      "Le dispositif FortiGate génère des trames BPDU d'arbre d'exploration."
    ],
    BR: [1]
  },
  {
    Q: "Quels sont les exemples de syntaxe correcte pour la commande de diagnostic de la table de session ? (Choisissez-en deux.)",
    R: [
      "diagnose sys session filter clear",
      "diagnose sys session src 10.0.1.254",
      "diagnose sys session filter",
      "diagnose sys session filter list dst."
    ],
    BR: [0, 2]
  },
  {
    Q: "Dans quel ordre les politiques de pare-feu sont-elles traitées sur une unité FortiGate ?",
    R: [
      "De haut en bas, en fonction de leur numéro de séquence.",
      "De haut en bas, en fonction de leur numéro d'identification de politique.",
      "En fonction de la meilleure correspondance.",
      "En fonction de la valeur de priorité."
    ],
    BR: [0]
  },
  {
    Q: "Quel champ d'en-tête peut être utilisé dans une politique de pare-feu pour la correspondance du trafic ?",
    R: [
      "Le type et le code ICMP.",
      "DSCP.",
      "La taille de la fenêtre TCP.",
      "Numéro de séquence TCP."
    ],
    BR: [0]
  },
  {
    Q: "Quelles sont les deux affirmations vraies concernant les clauses de non-responsabilité de la politique de pare-feu ? (Choisissez-en deux.)",
    R: [
      "L'antivirus ne peut pas être utilisé en combinaison avec l'authentification de l'utilisateur.",
      "Ils ne peuvent être appliqués qu'aux interfaces sans fil.",
      "Les utilisateurs doivent accepter la clause de non-responsabilité pour continuer.",
      "La page de déni de responsabilité est personnalisable."
    ],
    BR: [2, 3]
  },
  {
    Q: "Examinez la pièce à conviction. Quelle affirmation décrit les indicateurs d'état verts qui apparaissent en regard des différents services FortiGuard Distribution Network, comme illustré dans la pièce ?",
    R: [
      "Ils indiquent que le FortiGate dispose des dernières mises à jour disponibles sur le réseau de distribution FortiGuard.",
      "Ils indiquent que des mises à jour sont disponibles et qu'elles doivent être téléchargées du réseau de distribution FortiGuard vers l'unité FortiGate.",
      "Ils indiquent que le FortiGate est en train de télécharger des mises à jour depuis le réseau de distribution FortiGuard.",
      "Ils indiquent que la FortiGate est en mesure de se connecter au réseau de distribution FortiGuard."
    ],
    BR: [3]
  },
  {
    Q: "Quels protocoles réseau sont pris en charge pour l'accès administratif à une unité FortiGate ? (Choisissez-en trois.)",
    R: [
      "SMTP",
      "WINS",
      "HTTP",
      "Telnet",
      "SSH"
    ],
    BR: [2, 3, 4]
  },
  {
    Q: "Quel est le processus de récupération du mot de passe de FortiGate ?",
    R: [
      "Interrompez la séquence de démarrage, modifiez le registre de démarrage et redémarrez. Après avoir modifié le mot de passe, réinitialisez le registre de démarrage.",
      "Connectez-vous via le port de console à l'aide du compte \"maintainer\" dans les secondes qui suivent la mise sous tension physique du FortiGate.",
      "Maintenez les touches CTRL + Esc (Échap.) enfoncées pendant le redémarrage, puis réinitialisez le mot de passe administrateur.",
      "Interrompre la séquence de démarrage et restaurer un fichier de configuration pour lequel le mot de passe a été modifié."
    ],
    BR: [1]
  },
  {
    Q: "Quelles méthodes peuvent être utilisées pour délivrer le code du jeton à un utilisateur qui est configuré pour utiliser l'authentification à deux facteurs ? (Choisissez-en trois.)",
    R: [
      "Blocs de code",
      "Message téléphonique SMS",
      "FortiToken",
      "Fenêtre contextuelle du navigateur",
      "Courriel"
    ],
    BR: [1, 2, 4]
  },
  {
    Q: "Un administrateur doit décharger la journalisation vers FortiAnalyzer à partir d'un FortiGate doté d'un disque dur interne. Quelles sont les affirmations vraies ? (Choisissez-en deux.)",
    R: [
      "Les journaux doivent être stockés sur la FortiGate avant d'être transmis à FortiAnalyzer.",
      "FortiGate utilise le port 8080 pour la transmission des journaux.",
      "Les messages de journal sont transmis en texte brut au format compressé LZ4 (méthode de stockage et de téléchargement).",
      "FortiGate peut crypter les communications en utilisant le trafic OFTP crypté par SSL."
    ],
    BR: [2, 3]
  },
  {
    Q: "Un administrateur observe que l'interface port1 ne peut pas être configurée avec une adresse IP. Quelles peuvent en être les raisons ? (Choisissez-en trois.)",
    R: [
      "L'interface a été configurée pour le renifleur à un bras.",
      "L'interface est membre d'une paire de fils virtuelle.",
      "Le mode de fonctionnement est transparent.",
      "L'interface est membre d'une zone.",
      "Le portail captif est activé dans l'interface."
    ],
    BR: [0, 1, 2]
  },
  {
    Q: "Quels énoncés décrivent correctement le fonctionnement en mode transparent ? (Choisissez-en trois.)",
    R: [
      "Toutes les interfaces du dispositif FortiGate en mode transparent doivent se trouver sur des sous-réseaux IP différents.",
      "Le FortiGate transparent est visible pour les hôtes du réseau dans un traceroute IP.",
      "Il permet l'inspection du trafic en ligne et la mise en place d'un pare-feu sans modifier le schéma IP du réseau.",
      "Les paquets Ethernet sont transférés en fonction des adresses MAC de destination, et non des adresses IP.",
      "La FortiGate agit comme un pont transparent et transmet le trafic à la couche 2."
    ],
    BR: [2, 3, 4]
  },
  {
    Q: "Visualisez la pièce à conviction. Lorsque le paramètre Rôle est défini sur Non défini, quelle est l'affirmation vraie ?",
    R: [
      "L'interface graphique fournit toutes les options de configuration disponibles pour l'interface port1.",
      "Vous ne pouvez pas configurer une adresse IP statique pour l'interface port1 car elle n'autorise que le mode d'adressage DHCP.",
      "Les politiques de pare-feu peuvent être créées uniquement à partir de l'interface port1 vers n'importe quelle interface.",
      "L'interface port1 est réservée à la gestion uniquement."
    ],
    BR: [0]
  },
  {
    Q: "Quelle affirmation est vraie concernant les numéros d'identification des politiques de pare-feu ?",
    R: [
      "Ils changent lorsque les politiques de pare-feu sont réorganisées.",
      "Définissent l'ordre dans lequel les règles sont traitées.",
      "Sont nécessaires pour modifier une politique de pare-feu à partir de l'interface CLI.",
      "Représentent le nombre d'objets utilisés dans la politique de pare-feu."
    ],
    BR: [2]
  },
  {
    Q: "Quelle affirmation concernant le délai d'authentification de la politique de pare-feu est vraie ?",
    R: [
      "Il s'agit d'un délai d'attente strict. Le FortiGate supprime la politique temporaire pour l'adresse IP source d'un utilisateur après l'expiration de ce délai.",
      "Il s'agit d'un hard timeout. Le FortiGate supprime la stratégie temporaire pour l'adresse MAC source d'un utilisateur à l'expiration de ce délai.",
      "Il s'agit d'un délai d'inactivité. Le FortiGate considère qu'un utilisateur est inactif s'il ne voit pas de paquets provenant de l'adresse MAC source de l'utilisateur.",
      "Il s'agit d'un délai d'inactivité. Le FortiGate considère qu'un utilisateur est inactif s'il ne voit pas de paquets provenant de l'adresse IP source de l'utilisateur."
    ],
    BR: [3]
  },
  {
    Q: "Parmi les paramètres et protocoles suivants, lesquels peuvent être utilisés pour fournir un accès administratif sécurisé et restrictif au FortiGate ? (Choisissez-en trois.)",
    R: [
      "Hôte de confiance",
      "HTTPS",
      "Authentification de confiance",
      "SSH",
      "FortiTelemetry"
    ],
    BR: [0, 1, 2]
  },
  {
    Q: "Quelles options de mise à jour des définitions d'antivirus et d'attaques sont prises en charge par les unités FortiGate ? (Choisissez-en deux.)",
    R: [
      "Mise à jour manuelle en téléchargeant les signatures depuis le site d'assistance.",
      "Mises à jour automatiques de FortiGuard.",
      "Pousser les mises à jour à partir d'un FortiAnalyzer.",
      "Exécutez la commande fortiguard-AV-AS depuis l'interface CLI."
    ],
    BR: [0, 1]
  },
  {
    Q: "Dans quels états de processus est-il impossible d'interrompre/supprimer un processus ? (Choisissez-en deux.)",
    R: [
      "A. S- Sleep",
      "B. R-Running",
      "C. D - Sommeil ininterrompu",
      "D. Z-Zombie"
    ],
    BR: [2, 3]
  },
  {
    Q: "Quel est le processus de récupération du mot de passe de FortiGate ? (Question 19)",
    R: [
      "Interrompez la séquence de démarrage, modifiez le registre de démarrage et redémarrez.",
      "Connectez-vous via le port de console à l'aide du compte \"maintainer\" dans les secondes qui suivent la mise sous tension physique du FortiGate.",
      "Maintenez les touches CTRL + Esc (Échap.) enfoncées pendant le redémarrage, puis réinitialisez le mot de passe administrateur.",
      "Interrompre la séquence de démarrage et restaurer un fichier de configuration pour lequel le mot de passe a été modifié."
    ],
    BR: [1]
  },
  {
    Q: "Qu'est-ce qui n'est pas une fonctionnalité de FortiGate ?",
    R: [
      "Audit de la base de données",
      "Prévention des intrusions",
      "Filtrage Web",
      "Contrôle des applications"
    ],
    BR: [0]
  },
  {
    Q: "Lorsqu'un administrateur tente de gérer la FortiGate depuis une adresse IP qui n'est pas un hôte de confiance, que se passe-t-il ?",
    R: [
      "FortiGate soumet toujours le trafic de cette personne aux politiques de pare-feu ; il ne les contourne pas.",
      "FortiGate abandonne les paquets et ne répond pas.",
      "FortiGate répond par un message de blocage, indiquant qu'il ne permettra pas à cette personne de se connecter.",
      "FortiGate répond uniquement si l'administrateur utilise un protocole sécurisé. Sinon, il ne répond pas."
    ],
    BR: [1]
  },
  {
    Q: "Un fichier de sauvegarde commence par cette ligne : Pouvez-vous le restaurer sur un FortiWiFi 60D ? #config-version-FGVM64-5.02-FW-build589-140613:opmode=0:vdom=0:user-admin #conf file ver-3881503152630288414 #buildno=0589 #global vdom=1",
    R: [
      "Oui",
      "Oui, mais uniquement si vous remplacez la ligne \"#conf file ver\" par le numéro de série de ce FortiWiFi 60D spécifique.",
      "Oui, mais seulement s'il exécute la même version de FortiOS, ou une version compatible plus récente.",
      "Non"
    ],
    BR: [3]
  },
  {
    Q: "Acme Web Hosting remplace un de ses pare-feu par un FortiGate. Il doit pouvoir appliquer le transfert de port à ses serveurs Web dorsaux tout en bloquant les téléchargements de virus et les inondations TCP SYN des attaquants. Quel mode de fonctionnement est le meilleur choix pour répondre à ces exigences ?",
    R: [
      "NAT/route",
      "Mode NAT avec une interface en mode renifleur à un bras",
      "Mode transparent",
      "Il n'existe aucun mode de fonctionnement approprié"
    ],
    BR: [0]
  },
  {
    Q: "Vous avez configuré le serveur DHCP sur l'interface port1 d'une FortiGate pour offrir des IP dans la plage 192.168.1.65-192.168.1.253. Lorsque le premier hôte envoie une requête DHCP, quelle IP le serveur DHCP va-t-il offrir ?",
    R: [
      "192.168.1.99",
      "192.168.1.253",
      "192.168.1.65",
      "192.168.1.66"
    ],
    BR: [2]
  },
  {
    Q: "Vous avez créé un nouveau compte administrateur et lui avez attribué le profil prof_admin. Qu'est-ce qui est faux concernant les autorisations de ce compte ?",
    R: [
      "Il ne peut pas mettre à niveau ou rétrograder le micrologiciel.",
      "Il peut créer et affecter des comptes d'administrateur à certaines parties de son propre VDOM.",
      "Il peut réinitialiser les mots de passe oubliés pour d'autres comptes d'administrateur tels que \"admin\".",
      "Il a une portée de permissions plus petite que les comptes avec le profil \"super admin\"."
    ],
    BR: [2]
  },
  {
    Q: "Quelle fonctionnalité UTM envoie une requête UDP aux serveurs FortiGuard chaque fois que FortiGate analyse un paquet (sauf si la réponse est mise en cache localement) ?",
    R: [
      "Antivirus",
      "VPN",
      "IPS",
      "Filtrage Web"
    ],
    BR: [3]
  },
  {
    Q: "Une nouvelle version du firmware FortiOS vient d'être publiée. Lorsque vous téléchargez un nouveau micrologiciel, quelle est la vérité ?",
    R: [
      "Si vous téléchargez l'image du micrologiciel via le menu du chargeur de démarrage à partir d'un serveur TFTP, la configuration ne sera pas préservée. Mais si vous téléchargez un nouveau micrologiciel via l'interface graphique ou l'interface CLI, tant que vous suivez un chemin de mise à niveau pris en charge, FortiOS tentera de convertir la configuration existante pour qu'elle soit valide avec toute syntaxe nouvelle ou modifiée.",
      "Aucun paramètre n'est conservé. Vous devez procéder à une reconfiguration complète.",
      "Aucun paramètre n'est conservé. Après la mise à niveau, vous devez télécharger un fichier de sauvegarde de la configuration. FortiOS ignorera les commandes qui ne sont pas valides dans le nouveau système d'exploitation.",
      "Vous devez utiliser FortiConverter pour convertir un fichier de configuration de sauvegarde dans la syntaxe requise par le nouveau FortiOS, puis le télécharger vers FortiGate."
    ],
    BR: [0]
  },
  {
    Q: "Si vous avez perdu le mot de passe du compte \"admin\" de votre FortiGate, comment le réinitialiser ?",
    R: [
      "Connectez-vous à l'aide d'un autre compte administrateur disposant des autorisations de profil \"super_admin\", puis réinitialisez le mot de passe du compte \"admin\".",
      "Redémarrez la FortiGate. Via la console locale, pendant le chargeur de démarrage, utilisez le menu pour formater le disque flash et réinstaller le micrologiciel.",
      "Mettez la FortiGate hors tension. Après plusieurs secondes, redémarrez-le. Via la console locale, dans les 30 secondes après la fin du démarrage, connectez-vous en tant que 'pour le compte \"admin\". \"maintainer\" et entrez les commandes CLI pour définir le mot de passe.",
      "Redémarrez la FortiGate. Via la console locale, pendant le chargeur de démarrage, utilisez le menu pour vous connecter en tant que \"maintainer\" et entrez les commandes CLI pour définir le mot de passe pour le compte \"admin\"."
    ],
    BR: [2]
  },
  {
    Q: "Quels sont les éléments qui définissent l'identification du dispositif ? (Choisissez-en deux.)",
    R: [
      "L'identification des périphériques est activée par défaut sur toutes les interfaces.",
      "L'activation d'un périphérique source dans une politique de pare-feu permet l'identification des périphériques sur les interfaces sources de cette politique.",
      "Vous ne pouvez pas combiner l'utilisateur source et le périphérique source dans la même politique de pare-feu.",
      "FortiClient peut être utilisé comme une technique d'identification des périphériques basée sur un agent.",
      "Seules les techniques d'identification des périphériques sans agent sont prises en charge."
    ],
    BR: [1, 3]
  },
  {
    Q: "Quelle est la vérité sur la table de session de FortiGate ?",
    R: [
      "NAT/PAT est affiché dans la table NAT centrale, et non dans la table de session.",
      "Elle indique les états de connexion TCP.",
      "Il indique les sessions IP, SSL et HTTP.",
      "Il n'affiche pas les codes d'état de connexion UDP ou ICMP, car ces protocoles sont sans connexion."
    ],
    BR: [1]
  },
  {
    Q: "Quelles méthodes FortiGate peut-il utiliser pour envoyer un mot de passe à usage unique (OTP) aux utilisateurs de l'authentification à deux facteurs ? (Choisissez-en trois.)",
    R: [
      "FortiToken matériel",
      "Portail Web",
      "Courriel",
      "Token USB",
      "Logiciel FortiToken (FortiToken mobile)"
    ],
    BR: [0, 2, 4]
  },
  {
    Q: "Qu'est-ce que FortiToken utilise comme entrée lors de la génération d'un code de jeton ? (Choisissez-en deux.)",
    R: [
      "Le mot de passe de l'utilisateur",
      "Heure",
      "Nom de l'utilisateur",
      "Semence"
    ],
    BR: [1, 3]
  },
  {
    Q: "Qu'est-ce qui est faux dans la configuration des clauses de non-responsabilité sur la FortiGate ?",
    R: [
      "Les clauses de non-responsabilité peuvent être utilisées conjointement avec le portail captif.",
      "Les clauses de non-responsabilité apparaissent avant l'authentification des utilisateurs.",
      "Les clauses de non-responsabilité peuvent être contournées par le biais de listes d'exemption de sécurité.",
      "Les clauses de non-responsabilité doivent être acceptées afin de poursuivre la connexion d'authentification ou la destination."
    ],
    BR: [2]
  },
  {
    Q: "Quel type de mode de conservation écrit un message de journal immédiatement, plutôt que lorsque le périphérique quitte le mode de conservation ?",
    R: [
      "Kernel",
      "ProXy",
      "Système",
      "Dispositif"
    ],
    BR: [0, 1]
  },
  {
    Q: "Lesquels des modes de fonctionnement suivants sont pris en charge par les dispositifs FortiGate ? (Choisissez-en deux.)",
    R: [
      "Proxy",
      "Transparent",
      "NAT/route",
      "Inspection hors ligne"
    ],
    BR: [1, 2]
  },
  {
    Q: "Quels types de dépannage pouvez-vous effectuer lors du téléchargement d'un micrologiciel ? (Choisissez-en deux.)",
    R: [
      "Rechercher un micrologiciel corrompu",
      "Recherche de l'état d'exécution actuel",
      "Rechercher le matériel endommagé",
      "Examiner l'historique de la configuration"
    ],
    BR: [0, 3]
  },
  {
    Q: "Quelles sont les sorties de la commande 'diagnose hardware deviceinfo nic' ? (Choisissez-en deux.)",
    R: [
      "Cache ARP",
      "Adresse MAC physique",
      "Erreurs et collisions",
      "Ports TCP à l'écoute"
    ],
    BR: [1, 2]
  },
  {
    Q: "Dans la sortie de la table de session de FortiOS, quel est le numéro correct de l'état du proto pour une connexion TCP non proxy établie ?",
    R: [
      "00",
      "11",
      "01",
      "05"
    ],
    BR: [2]
  },
  {
    Q: "Quelles commandes sont appropriées pour enquêter sur les CPU élevés ? (Choisissez-en deux.)",
    R: [
      "diag sys top",
      "diag hardware sysinfo mem",
      "diag debug flow",
      "get system performance status"
    ],
    BR: [0, 3]
  },
  {
    Q: "A quels états TCP s'applique le paramètre global 'tcp-half-open-timer' ? (Choisissez deux.)",
    R: [
      "SYN SENT",
      "SYN & SYN/ACK",
      "FIN WAIT",
      "TEMPS D'ATTENTE"
    ],
    BR: [0, 3]
  },
  {
    Q: "Dans la sortie de la table de session FortiOS, quelles sont les deux valeurs possibles de 'proto_state' pour une session UDP ? (Choisissez-en deux.)",
    R: [
      "00",
      "11",
      "01",
      "05"
    ],
    BR: [0, 2]
  },
  {
    Q: "Lesquels définissent correctement 'Section View' et 'Global View' pour les politiques de pare-feu ? (Choisissez-en deux.)",
    R: [
      "La vue de section répertorie les politiques de pare-feu principalement par leurs paires d'interfaces.",
      "La vue par section répertorie les politiques de pare-feu principalement par leur numéro de séquence.",
      "La vue globale répertorie les politiques de pare-feu principalement par leurs paires d'interfaces.",
      "La vue globale répertorie les politiques de pare-feu principalement par leur numéro de séquence.",
      "L'interface 'any' peut être utilisée avec la vue de section."
    ],
    BR: [0, 3]
  },
  {
    Q: "Un administrateur souhaite configurer un FortiGate en tant que serveur DNS. Le FortiGate doit d'abord utiliser sa base de données DNS, puis relayer toutes les requêtes non résolues à un serveur DNS externe. Laquelle des méthodes DNS suivantes devez-vous utiliser ?",
    R: [
      "Non-récursif",
      "Récursif",
      "Transmission au DNS primaire et secondaire",
      "Transfert vers le DNS système"
    ],
    BR: [1]
  },
  {
    Q: "Parmi les produits Fortinet suivants, lesquels peuvent recevoir des mises à jour du FortiGuard Distribution Network ?",
    R: [
      "FortiGate",
      "FortiClient",
      "FortiMail",
      "FortiAnalyzer"
    ],
    BR: [0, 1, 2]
  },
  {
    Q: "Un FortiGate est configuré pour recevoir des mises à jour push du réseau de distribution FortiGuard, mais les mises à jour ne sont pas reçues. Quelles sont les deux raisons de ce problème ? (Choisissez-en deux.)",
    R: [
      "La FortiGate est connectée à plusieurs FAI.",
      "Un dispositif NAT se trouve entre le FortiGate et le réseau de distribution FortiGuard et aucune IP de poussée prioritaire n'est configurée.",
      "Le FortiGate est en mode transparent, qui ne prend pas en charge les mises à jour push.",
      "L'interface externe de la FortiGate est configurée pour obtenir l'adresse IP d'un serveur DHCP."
    ],
    BR: [1, 3]
  },
  {
    Q: "Parmi les protocoles réseau suivants, lesquels sont pris en charge pour l'accès administratif à une unité FortiGate ?",
    R: [
      "HTTPS, HTTP, SSH, TELNET, PING, SNMP",
      "FTP, HTTPS, NNTP, TCP, WINS",
      "HTTP, NNTP. SMTP. DHCP",
      "Telnet, FTP, RLOGIN, HTTP, HTTPS, DDNS",
      "Telnet, UDP, NNTP, SMTP"
    ],
    BR: [0]
  },
  {
    Q: "Laquelle des affirmations suivantes est correcte concernant une unité FortiGate fonctionnant en mode NAT/Route ?",
    R: [
      "L'unité FortiGate applique la NAT à l'ensemble du trafic.",
      "L'unité FortiGate fonctionne comme un périphérique de couche 3.",
      "L'unité FortiGate fonctionne comme un dispositif de couche 2.",
      "L'unité FortiGate fonctionne comme un routeur et la fonction de pare-feu est désactivée."
    ],
    BR: [1]
  },
  {
    Q: "Laquelle des affirmations suivantes est correcte concernant une unité FortiGate fonctionnant en mode NAT/Route ? (Question 48)",
    R: [
      "L'unité FortiGate n'a besoin que d'une seule adresse IP pour recevoir des mises à jour et configurer depuis un ordinateur de gestion.",
      "L'unité FortiGate doit utiliser des adresses IP publiques sur les réseaux interne et externe.",
      "L'unité FortiGate utilise généralement des adresses IP privées sur le réseau interne, mais les dissimule en utilisant la traduction d'adresses réseau.",
      "L'unité FortiGate utilise uniquement des adresses IP attribuées par DHCP sur le réseau interne."
    ],
    BR: [2]
  },
  {
    Q: "Une unité FortiGate peut fournir laquelle des capacités suivantes ? (Sélectionnez toutes les qui s'appliquent.)",
    R: [
      "Filtrage des e-mails",
      "Pare-feu",
      "Passerelle VPN",
      "Relais de messagerie",
      "Serveur de messagerie"
    ],
    BR: [0, 1, 2]
  },
  {
    Q: "Laquelle des méthodes suivantes peut être utilisée pour accéder au CLI ? (Sélectionnez toutes qui s'appliquent.)",
    R: [
      "En utilisant une connexion directe à une console série.",
      "En utilisant la fenêtre de la console CLI dans l'interface graphique.",
      "En utilisant une connexion SSH.",
      "En utilisant une connexion Telnet."
    ],
    BR: [0, 1, 2, 3]
  },
  {
    Q: "REMPLIR LE VIDE. La commande CLI _____ est utilisée sur l'unité FortiGate pour exécuter des commandes statiques telles que ping ou pour réinitialiser l'unité FortiGate aux paramètres d'usine par défaut.",
    R: [
      "execute"
    ],
    BR: [0]
  },
  {
    Q: "Lors de la sauvegarde du fichier de configuration sur une unité FortiGate, le contenu peut être crypté en activant l'option encrypt et en fournissant un mot de passe. Si le mot de passe est oublié, le fichier de configuration peut être restauré à l'aide de l'une des méthodes suivantes ?",
    R: [
      "En sélectionnant l'option de récupération du mot de passe pendant le processus de restauration.",
      "En envoyant le mot de passe par courrier électronique à l'utilisateur administratif en sélectionnant l'option Mot de passe oublié.",
      "En envoyant le fichier de configuration au support Fortinet pour le décryptage.",
      "Si le mot de passe est oublié, il n'y a aucun moyen d'utiliser le fichier."
    ],
    BR: [3]
  },
  {
    Q: "Lors de la création d'utilisateurs administratifs, lequel des objets de configuration suivants détermine les droits d'accès sur l'unité FortiGate ?",
    R: [
      "Profil",
      "paramètres de l'interface allowaccess",
      "mode de fonctionnement",
      "politique local-in"
    ],
    BR: [0]
  },
  {
    Q: "Lesquels des énoncés suivants sont vrais pour la configuration par défaut de l'unité FortiGate ? (Choisissez-en deux.)",
    R: [
      "L'interface 'Port1' ou 'Internal' aura une adresse IP de 192.168.1.99.",
      "Un serveur DHCP est configuré et activé sur l'interface 'Port1' ou 'Interne' (sur les périphériques prenant en charge les serveurs DHCP).",
      "La connexion par défaut sera toujours le nom d'utilisateur : admin (tout en minuscules) et aucun mot de passe.",
      "L'action implicite du pare-feu est ACCEPTER."
    ],
    BR: [0, 1, 2]
  },
  {
    Q: "Sous le widget Informations système du tableau de bord, quelles sont les actions suivantes disponibles pour la configuration du système ? (Sélectionnez toutes celles qui s'appliquent.)",
    R: [
      "Sauvegarder",
      "Restaurer",
      "Révisions",
      "Exporter"
    ],
    BR: [0, 1, 2]
  },
  {
    Q: "Les fonctionnalités UTM peuvent être appliquées à lequel des éléments suivants ?",
    R: [
      "Politiques de pare-feu",
      "Groupes d'utilisateurs",
      "Routes de politique",
      "Groupes d'adresses"
    ],
    BR: [0]
  },
  {
    Q: "Chaque fonction UTM possède des objets UTM configurables tels que des capteurs, des profils ou des listes qui définissent le fonctionnement de la fonction. Comment les fonctionnalités UTM sont-elles appliquées au trafic ?",
    R: [
      "Une ou plusieurs fonctionnalités UTM sont activées dans une politique de pare-feu.",
      "Dans la configuration système de cette fonction UTM, vous pouvez identifier les politiques auxquelles la fonction doit être appliquée.",
      "Activez les objets UTM appropriés et identifiez l'un d'entre eux comme étant la valeur par défaut.",
      "Pour chaque objet UTM, identifiez la politique qui l'utilisera."
    ],
    BR: [0]
  },
  {
    Q: "Si aucune politique de pare-feu n'est spécifiée entre deux interfaces FortiGate et que les zones ne sont pas utilisées, laquelle des affirmations suivantes décrit l'action prise sur le trafic circulant entre ces interfaces ?",
    R: [
      "Le trafic est bloqué.",
      "Le trafic est autorisé.",
      "Le trafic est autorisé et enregistré.",
      "Le trafic est bloqué et enregistré."
    ],
    BR: [0]
  },
  {
    Q: "Parmi les produits suivants, lesquels peuvent être installés sur un ordinateur fonctionnant sous Windows XP afin de fournir une protection pare-feu personnelle, une protection antivirus, un filtrage web et du courrier, le filtrage du spam et la fonctionnalité VPN ?",
    R: [
      "FortiGate",
      "FortiAnalyzer",
      "FortiClient",
      "FortiManager",
      "FortiReporter"
    ],
    BR: [2]
  },
  {
    Q: "Qu'est-ce qui n'est PAS vrai concernant les paramètres d'allocation de blocs de ports de type pool IP ?",
    R: [
      "La taille d'un bloc définit le nombre de connexions.",
      "Blocs par utilisateur définit le nombre de blocs de connexion pour chaque utilisateur.",
      "Une plage d'adresses IP internes définit les adresses IP autorisées à utiliser le pool.",
      "Une plage d'adresses IP externes définit les adresses IP du pool."
    ],
    BR: [1]
  },
  {
    Q: "Quelle affirmation concernant les services FortiGuard pour FortiGate est vraie ?",
    R: [
      "La base de données du filtrage Web est téléchargée localement sur FortiGate.",
      "Les signatures antivirus sont téléchargées localement sur FortiGate.",
      "FortiGate télécharge les mises à jour IPS à l'aide du port UDP 53 ou 8888.",
      "FortiAnalyzer peut être configuré comme un FDN local pour fournir des mises à jour de l'antivirus et de l'IPS."
    ],
    BR: [1]
  },
  {
    Q: "Parmi les méthodes de filtrage du spam suivantes, lesquelles sont prises en charge par l'unité FortiGate ? (Sélectionnez toutes les réponses applicables.)",
    R: [
      "Vérification de l'adresse IP",
      "Liste de base de données des relais ouverts (ORDBL)",
      "Liste noire/blanche",
      "Vérification du DNS du courriel de retour",
      "Vérification de la somme de contrôle des courriels"
    ],
    BR: [0, 1, 2, 3, 4]
  },
  {
    Q: "Un administrateur configure une unité FortiGate en mode transparent sur le sous-réseau 192.168.11.0. La fonction de découverte automatique est activée pour détecter tous les FortiAnalyzers disponibles sur le réseau. Lequel des FortiAnalyzers suivants sera détecté ?",
    R: [
      "192.168.11.100",
      "192.168.11.251",
      "192.168.10.100",
      "192.168.10.251"
    ],
    BR: [0, 1]
  },
  {
    Q: "Quelles sont les options valables pour le traitement des requêtes DNS envoyées directement à l'interface d'un FortiGate ? (Choisissez-en trois.)",
    R: [
      "Transfert conditionnel.",
      "Forward-only.",
      "Non-récursif.",
      "Itératif.",
      "Récursif."
    ],
    BR: [1, 2, 4]
  },
  {
    Q: "Quelles sont les deux affirmations vraies concernant les clauses de non-responsabilité des politiques de pare-feu ? (Choisissez-en deux.)",
    R: [
      "Ils ne peuvent pas être utilisés en combinaison avec l'authentification des utilisateurs.",
      "Ils ne peuvent être appliqués qu'aux interfaces sans fil.",
      "Les utilisateurs doivent accepter la clause de non-responsabilité pour continuer.",
      "La page de déni de responsabilité est personnalisable."
    ],
    BR: [2, 3]
  },
  {
    Q: "Lesquels définissent correctement 'Section View' et 'Global View' pour les politiques de pare-feu ? (Choisissez-en deux.)",
    R: [
      "La vue par section répertorie les politiques de pare-feu principalement par leurs paires d'interfaces.",
      "La vue par section répertorie les politiques de pare-feu principalement par leur numéro de séquence.",
      "La vue globale répertorie les politiques de pare-feu principalement par leurs paires d'interfaces.",
      "La vue globale répertorie les politiques de pare-feu principalement par leur numéro de séquence.",
      "L'interface 'any' peut être utilisée avec la vue de section."
    ],
    BR: [0, 3]
  },
  {
    Q: "Dans la sortie 'diag debug flow', vous voyez le message 'Allowed by Policy-1 : SNAT'. Qu'est-ce qui est vrai ?",
    R: [
      "Le paquet correspond à la politique la plus élevée dans la liste des politiques de pare-feu.",
      "Le paquet correspond à la politique de pare-feu dont l'ID de politique est 1.",
      "Le paquet correspond à une politique de pare-feu, qui autorise le paquet et ignore les vérifications UTM.",
      "La politique autorise le paquet et applique le NAT de session."
    ],
    BR: [1]
  },
  {
    Q: "Qu'est-ce qui est vrai à propos des interfaces entrantes et sortantes dans les politiques de pare-feu ?",
    R: [
      "Une interface physique ne peut pas être utilisée.",
      "Une zone ne peut pas être utilisée.",
      "Il n'est pas possible d'utiliser plusieurs interfaces pour les communications entrantes et sortantes.",
      "Les interfaces de source et de destination sont obligatoires."
    ],
    BR: [3]
  },
  {
    Q: "Quel trafic peut correspondre au paramètre 'Services' d'une politique de pare-feu ? (Choisissez-en trois.)",
    R: [
      "HTTP",
      "SSL",
      "DNS",
      "RSS",
      "HTTPS"
    ],
    BR: [0, 2, 4]
  },
  {
    Q: "Qu'est-ce qui n'est PAS vrai à propos de la correspondance des sources avec les politiques de pare-feu ?",
    R: [
      "Un objet d'adresse source doit être sélectionné dans la politique de pare-feu.",
      "Un utilisateur/groupe source peut être sélectionné dans la politique de pare-feu.",
      "Un périphérique source peut être défini dans la politique de pare-feu.",
      "Une interface source doit être sélectionnée dans la politique de pare-feu.",
      "Un utilisateur/groupe et un périphérique source doivent être spécifiés dans la politique de pare-feu."
    ],
    BR: [4]
  },
  {
    Q: "Quelle est la meilleure description du délai d'authentification ?",
    R: [
      "La durée pendant laquelle FortiGate attend que l'utilisateur saisisse ses informations d'identification.",
      "La durée pendant laquelle un utilisateur est autorisé à envoyer et à recevoir du trafic avant de devoir s'authentifier à nouveau.",
      "La durée pendant laquelle un utilisateur authentifié peut rester inactif (sans envoyer de trafic) avant de devoir s'authentifier à nouveau.",
      "Combien de temps une session authentifiée par un utilisateur peut exister sans devoir s'authentifier à nouveau."
    ],
    BR: [2]
  },
  {
    Q: "Pour le trafic qui ne correspond à aucune politique de pare-feu configurée, quelle est l'action par défaut par le FortiGate ?",
    R: [
      "Le trafic est autorisé et aucun journal n'est généré.",
      "Le trafic est autorisé et consigné.",
      "Le trafic est bloqué et aucun journal n'est généré.",
      "Le trafic est bloqué et consigné."
    ],
    BR: [2]
  },
  {
    Q: "Dans quel ordre les politiques de pare-feu sont-elles traitées sur une unité FortiGate ? (Question 73)",
    R: [
      "De haut en bas, en fonction de leur numéro de séquence.",
      "De haut en bas, en fonction de leur numéro d'identification de politique.",
      "En fonction de la meilleure correspondance.",
      "En fonction de la valeur de priorité."
    ],
    BR: [0]
  },
  {
    Q: "Quelle affirmation est vraie concernant les numéros d'identification des politiques de pare-feu ? (Question 74)",
    R: [
      "Ils changent lorsque les politiques de pare-feu sont réorganisées.",
      "Définissent l'ordre dans lequel les règles sont traitées.",
      "Sont nécessaires pour modifier une politique de pare-feu à partir de l'interface CLI.",
      "Représentent le nombre d'objets utilisés dans la politique de pare-feu."
    ],
    BR: [2]
  },
  {
    Q: "Quelle affirmation concernant le délai d'authentification de la politique de pare-feu est vraie ? (Question 75)",
    R: [
      "Il s'agit d'un délai d'attente strict. Le FortiGate supprime la politique temporaire pour l'adresse IP source d'un utilisateur après l'expiration de ce délai.",
      "Il s'agit d'un délai d'attente ferme. Le FortiGate supprime la stratégie temporaire pour l'adresse MAC source d'un utilisateur à l'expiration de ce délai.",
      "Il s'agit d'un délai d'inactivité. Le FortiGate considère qu'un utilisateur est inactif s'il ne voit pas de paquets provenant de l'adresse MAC source de l'utilisateur.",
      "Il s'agit d'un délai d'inactivité. Le FortiGate considère qu'un utilisateur est inactif s'il ne voit pas de paquets provenant de l'adresse IP source de l'utilisateur."
    ],
    BR: [3]
  },
  {
    Q: "Dans quelles circonstances activeriez-vous l'option APPRENTISSAGE en tant qu'action d'une politique de pare-feu ?",
    R: [
      "Vous souhaitez que FortiGate compile l'activité des fonctions de sécurité à partir de divers journaux liés à la sécurité, tels que les journaux de virus et d'attaques.",
      "Vous souhaitez que FortiGate surveille un profil de sécurité spécifique dans une politique de pare-feu et fournisse des recommandations pour ce profil.",
      "Vous souhaitez capturer des données sur l'ensemble du trafic et des vecteurs de sécurité, et recevoir des journaux d'apprentissage et un rapport contenant des recommandations.",
      "Vous souhaitez que FortiGate modifie automatiquement vos politiques de pare-feu à mesure qu'il apprend votre comportement réseau."
    ],
    BR: [1]
  },
  {
    Q: "Quels objets de configuration peuvent être sélectionnés pour le champ Source d'une politique de pare-feu ? (Choisissez-en deux.)",
    R: [
      "Adresse FQDN",
      "Pool IP",
      "Utilisateur ou groupe d'utilisateurs",
      "Service de pare-feu"
    ],
    BR: [0, 2]
  },
  {
    Q: "Une route statique est configurée pour une unité FortiGate à partir de l'interface CLI. Quelles sont les conditions requises pour que cette route statique par défaut s'affiche dans la table de routage de l'unité FortiGate ? (Choisissez-en deux.)",
    R: [
      "L'état administratif de l'interface wan1 est affiché comme étant hors service.",
      "L'état de la liaison de l'interface wan1 est affiché comme étant haut.",
      "Tous les autres routeurs par défaut doivent avoir une distance inférieure.",
      "L'adresse de l'interface wan1 et l'adresse de la passerelle sont sur le même sous-réseau."
    ],
    BR: [1, 3]
  },
  {
    Q: "Quels objets de pare-feu peuvent être inclus dans le champ Adresse de destination d'une politique de pare-feu ? (Choisissez-en trois.)",
    R: [
      "Pool d'adresses IP.",
      "Adresse IP virtuelle.",
      "Adresse IP.",
      "Groupe d'adresses IP.",
      "Adresse MAC"
    ],
    BR: [1, 2, 3]
  },
  {
    Q: "L'ordre des règles d'un firewall est important. Les règles peuvent être réorganisées à partir du GUI ou du CLI. Quelle commande CLI peut être utilisée pour améliorer la performance ?",
    R: [
      "Set Order",
      "edit policy",
      "reoder",
      "move"
    ],
    BR: [3]
  },
  {
    Q: "Examinez la configuration CLI suivante. Quelle affirmation est vraie concernant l'effet de la ligne de configuration ci-dessus ?",
    R: [
      "Les sessions peuvent rester inactives pendant plus de 1800 secondes.",
      "La durée maximale d'ouverture d'une session est de 1800 secondes.",
      "Après 1800 secondes, l'utilisateur final doit se réauthentifier.",
      "Après qu'une session a été ouverte pendant 1800 secondes, le FortiGate envoie un paquet keepalive au client et au serveur."
    ],
    BR: [0]
  },
  {
    Q: "Lequel des éléments suivants n'est PAS une caractéristique de paquet correspondant à un objet de service de pare-feu ?",
    R: [
      "ICMP type and code",
      "TCP/UDP source and destination ports",
      "IP protocol number",
      "TCP sequence number"
    ],
    BR: [3]
  },
  {
    Q: "Quels sont les sous-types valables pour une politique de type pare-feu ? (Sélectionnez toutes les réponses qui s'appliquent.)",
    R: [
      "Identité du dispositif",
      "Adresse",
      "Identité de l'utilisateur",
      "Programme",
      "VPN SSL"
    ],
    BR: [0, 1, 2]
  },
  {
    Q: "Lequel des éléments d'information suivants peut être inclus dans le champ Adresse de destination d'une politique de pare-feu ? (Sélectionnez toutes les réponses qui s'appliquent.)",
    R: [
      "Un pool d'adresses IP",
      "Un ajout d'IP virtuel",
      "Une adresse IP réelle ou un groupe d'adresses IP",
      "Un FQDN ou une (des) valeur(s) géographique(s)"
    ],
    BR: [1, 2, 3]
  },
  {
    Q: "Vous souhaitez créer une politique de pare-feu qui s'applique uniquement au trafic destiné à votre serveur Web. Le serveur web a une adresse IP de 192.168.2.2 et un masque de sous-réseau /24. Lorsque vous définissez l'adresse du pare-feu à utiliser dans cette politique, laquelle des adresses suivantes est correcte ?",
    R: [
      "192.168.2.0 / 255.255.255.0",
      "192.168.2.2 / 255.255.255.0",
      "192.168.2.0 / 255.255.255.255",
      "192.168.2.2 / 255.255.255.255"
    ],
    BR: [3]
  },
  {
    Q: "En mode NAT/Route, lorsqu'il n'y a pas de politique de pare-feu correspondante pour le trafic à transmettre par le pare-feu, laquelle des affirmations suivantes décrit l'action prise sur le trafic ?",
    R: [
      "Le trafic est bloqué",
      "Le trafic est passé",
      "Le trafic est transmis et enregistré",
      "le trafic est bloqué et enregistré"
    ],
    BR: [0]
  },
  {
    Q: "Les règles de blocage de fichiers sont appliquées avant lequel des éléments suivants ?",
    R: [
      "Traitement des politiques de pare-feu",
      "Analyse de virus",
      "Filtrage des URL sur Internet",
      "Filtrage des listes blanches/noires"
    ],
    BR: [1]
  },
  {
    Q: "Les unités Fortigate sont préconfigurées avec quatre profils de protection par défaut. Ces profils de protection sont utilisés pour contrôler le type d'inspection du contenu à effectuer. Quelle action doit être effectuée pour qu'un de ces profils devienne actif ?",
    R: [
      "Le profil de protection doit être associé à une politique de pare-feu.",
      "L'option \"utiliser le profil de protection\" doit être sélectionnée dans l'outil de configuration Web sous les sections AntiVirus, IPS, WebFilter et AntiSpam.",
      "Le profil de protection doit être défini comme le profil de protection actif.",
      "Tout ce qui précède"
    ],
    BR: [0]
  },
  {
    Q: "Une unité fortigate 60 est configurée pour votre petit bureau. L'interface DMZ est connectée à un réseau contenant 10 stations de travail utilisateur et l'interface WAN1 est connectée à votre ISP. Vous voulez configurer des polices de pare-feu pour que vos utilisateurs puissent envoyer et recevoir des messages électroniques au serveur de messagerie sur le réseau DMZ. Vous souhaitez également que le serveur de messagerie puisse récupérer les messages électroniques d'un serveur de messagerie hébergé par votre FAI en utilisant le protocole POP3. Quelles polices doivent être créées pour cette communication ? (Sélectionnez toutes celles qui s'appliquent.)",
    R: [
      "Internal > DMZ",
      "DMZ > Internal",
      "Internal > WAN1",
      "WAN1 > Internal",
      "DMZ > WAN1",
      "WAN1 > DMZ"
    ],
    BR: [0, 4]
  },
  {
    Q: "Laquelle des valeurs TTL de session suivante sera prioritaire ?",
    R: [
      "TTL de session spécifiée au niveau du système pour ce numéro de port.",
      "TTL de la session spécifiée dans la politique de pare-feu correspondante.",
      "TTL de session dictée par la liste de contrôle des applications associée à la politique de pare-feu correspondante.",
      "Le TTL de la session par défaut spécifié au niveau du système."
    ],
    BR: [2]
  },
  {
    Q: "Quelles affirmations décrivent correctement le fonctionnement en mode transparent ? (Choisissez-en trois.)",
    R: [
      "Le FortiGate agit comme un pont transparent et transmet le trafic au niveau de la couche 2.",
      "Les paquets Ethernet sont transférés en fonction des adresses MAC de destination, et non des adresses IP.",
      "La FortiGate transparente est clairement visible pour les hôtes du réseau dans une route de traçage IP.",
      "Permet l'inspection du trafic en ligne et la mise en place de pare-feu sans modifier le schéma IP du réseau.",
      "Toutes les interfaces de l'appareil FortiGate en mode transparent doivent être sur des sous-réseaux IP différents."
    ],
    BR: [0, 1, 3]
  },
  {
    Q: "Quels objets de configuration peuvent être sélectionnés pour le champ source d'une politique de pare-feu ? (Choisissez-en deux.)",
    R: [
      "Service de pare-feu",
      "Utilisateur ou groupe d'utilisateurs",
      "Pool IP",
      "Adresse FQDN"
    ],
    BR: [1, 2]
  },
  {
    Q: "Qu'est-ce qui n'est PAS vrai concernant les paramètres d'allocation de blocs de ports de type pool IP ? (Question 93)",
    R: [
      "La taille d'un bloc définit le nombre de connexions",
      "Blocs par utilisateur : définit le nombre de blocs de connexion pour chaque utilisateur.",
      "Une plage d'adresses IP interne définit les adresses IP autorisées à utiliser le pool.",
      "Une plage d'adresses IP externes définit les adresses IP du pool."
    ],
    BR: [1]
  },
  {
    Q: "Qu'est-ce qui est vrai de la table de session de Fortigate ?",
    R: [
      "NAT/PAT est affiché dans la table centrale de NAT, pas dans la table de session.",
      "Il montre les états de connexion de TCP",
      "Il indique les sessions IP, SSL et http",
      "Il n'affiche pas les codes d'état de connexion UDP ou ICMP, car ces protocoles sont sans connexion."
    ],
    BR: [1]
  },
  {
    Q: "Quelles affirmations concernant le pool IP One-to-One sont vraies ? (Choisissez-en deux.)",
    R: [
      "Il permet de configurer les réponses ARP",
      "Il permet le mappage fixe d'une plage d'adresses internes à une plage d'adresses externes",
      "Il est utilisé pour le NAT de destination",
      "Il n'utilise pas la traduction d'adresse de port"
    ],
    BR: [0, 3]
  },
  {
    Q: "Comment FortiGate sélectionne-t-il la politique SNAT centrale qui est appliquée à une session TCP ?",
    R: [
      "Il sélectionne la politique SNAT spécifiée dans la configuration de l'interface sortante.",
      "Il sélectionne la première politique centrale-SNAT correspondante, de haut en bas.",
      "Il sélectionne la politique centrale-SNAT avec la priorité la plus basse.",
      "Il sélectionne la politique SNAT spécifiée dans la configuration de la politique de pare-feu qui correspond au trafic."
    ],
    BR: [0]
  },
  {
    Q: "Parmi les choix suivants, lequel permet à un hôte externe de joindre un hôte interne ?",
    R: [
      "Port forwarding",
      "NAT overload",
      "PPPoE",
      "NAT64",
      "ATM"
    ],
    BR: [0]
  },
  {
    Q: "Quelles Implémentation NAT permet de limiter le nombre de connexions par adresse IP ?",
    R: [
      "IP Pool type : Overload",
      "IP Pool type : One-to-one",
      "IP Pool type : Fixed port range",
      "IP Pool type : Port block allocation"
    ],
    BR: [3]
  },
  {
    Q: "Examinez la pièce à conviction, qui contient une IP virtuelle et une configuration de politique de pare-feu. L'interface WAN (port1) à l'adresse IP 10.200.1.1/24. L'interface LAN (port2) à l'adresse IP 10.0.1.254/24. La politique de pare-feu supérieure a activé le NAT en utilisant l'adresse de l'interface sortante. La deuxième politique de pare-feu est configurée avec une IP virtuelle (VIP). Quelle adresse IP sera utilisée pour source NAT le trafic Internet provenant d'une station de travail avec l'adresse IP 10.0.1.10/24 ?",
    R: [
      "10.200.1.1",
      "10.0.1.254",
      "Toute adresse IP disponible dans le sous-réseau WAN (port1) 10.200.1.0/24",
      "10.200.1.10"
    ],
    BR: [3]
  },
  {
    Q: "Quelles déclarations sont vraies concernant la politique de pare-feu NAT en utilisant l'adresse IP de l'interface sortante avec port fixe désactivé ? (Choisissez deux.)",
    R: [
      "C'est ce qu'on appelle le NAT à plusieurs",
      "L'IP source est transférée vers l'IP de l'interface sortante",
      "Les connexions sont suivies à l'aide du port source et de l'adresse MAC source",
      "La traduction de l'adresse du port n'est pas utilisée"
    ],
    BR: [0, 1]
  },
  {
    Q: "Examinez la pièce à conviction, qui contient une configuration d'IP virtuelle et de politique de pare-feu. L'interface WAN (port1) à l'adresse IP 10.200.1.1/24. L'interface LAN (port2) à l'adresse IP 10.0.1.254/24. La première politique de pare-feu a activé la NAT sur l'adresse de l'interface sortante. La deuxième politique de pare-feu est configurée avec un VIP comme adresse de destination. Quelle adresse IP sera utilisée pour NAT à la source le trafic Internet provenant d'une station de travail avec l'adresse IP 10.0.1.10/24 ?",
    R: [
      "10.200.1.10",
      "Toute adresse IP disponible dans le sous-réseau WAN (port 1) 10.200.1.0/24",
      "10.200.1.1",
      "10.0.1.254"
    ],
    BR: [2]
  },
  {
    Q: "Examinez les deux routes statiques vers le même sous-réseau de destination 172.20.168.0/24 comme indiqué ci-dessous. Lequel des énoncés suivants décrit correctement la configuration de routage statique fournie ci-dessus ?",
    R: [
      "La forgiGate partage uniformément le trafic vers 172.20.168.0/24 à travers les deux routes.",
      "Le FortiGate partage le trafic vers 172.20.168.0/24 par les deux routes, mais la route du port2 transportera environ deux fois plus de trafic.",
      "Le FortiGate envoie tout le trafic vers 172.20.168.0/24 via le port1.",
      "Seule la route qui utilise le port1 apparaîtra dans la table de routage."
    ],
    BR: [2]
  },
  {
    Q: "S'il n'y a pas de changement dans la table de routage et dans le cas d'un trafic TCP, laquelle des propositions suivantes décrit correctement les consultations de la table de routage effectuées par un FortiGate en mode NAT/route, lors de la recherche d'une passerelle appropriée ?",
    R: [
      "Une recherche n'est effectuée que lorsque le premier paquet provenant du client (SYN) arrive.",
      "Une recherche est effectuée à l'arrivée du premier paquet en provenance du client (SYN), et une seconde est effectuée à l'arrivée du premier paquet en provenance du client (SYN/ACK).",
      "Three lookups are done during the TCP 3-way handshake (SYN, SYN/ACK, ACK).",
      "Une recherche est toujours effectuée à chaque fois qu'un paquet arrive, que ce soit du côté du serveur ou du client."
    ],
    BR: [1]
  },
  {
    Q: "Examinez la pièce à conviction. Depuis ce changement, la nouvelle route statique n'apparaît PAS dans la table de routage. Compte tenu des informations fournies, laquelle des propositions suivantes décrit la cause de ce problème ?",
    R: [
      "Le sous-réseau 172.20.1.0/24 est chevauché avec le sous-réseau d'une route statique qui est déjà dans la table de routage (172.20.0.0/16), donc nous devons d'abord activer allow-subent-overlap.",
      "L'adresse IP \"passerelle\" n'est PAS dans le même sous-réseau que l'adresse IP de port1.",
      "La priorité est 0, ce qui signifie que l'itinéraire restera inactif.",
      "La configuration de route statique est mission le réglage de distance."
    ],
    BR: [1]
  },
  {
    Q: "Une route statique est configurée pour une unité fortigate à partir de la CLI en utilisant les commandes suivantes. Parmi les conditions suivantes, lesquelles sont nécessaires pour que cette valeur par défaut statique soit affichée dans la table de routage de l'unité fortigate ? (Choisissez deux.)",
    R: [
      "L'état administratif de l'interface wan1 est affiché en bas.",
      "L'état du lien de l'interface wan1 est affiché comme haut.",
      "Tous les autres routeurs par défaut devraient avoir une distance inférieure.",
      "L'adresse de l'interface wan1 et l'adresse de la passerelle sont sur le même sous-réseau."
    ],
    BR: [1, 3]
  },
  {
    Q: "Examinez la pièce ci-dessous. Dans cette scénario, l'unité fortigate à Ottawa a le tableau d'acheminement suivant. Les tests de renifleur montrent que les paquets envoyés de l'adresse IP source 170.20.168.2 à l'adresse IP de destination 172.20.169.2 sont déposés par Fortigate, situé à Ottawa. Lequel des énoncés suivants décrit correctement la cause des paquets déposés ?",
    R: [
      "Le contrôle prospectif de la politique.",
      "Vérification de la trajectoire de réserve.",
      "Le sous-réseau 172.20.169.0/24 n'est PAS dans la table de routage d'Ottawa FortiGate.",
      "La station de travail de destination 172.20.169.2 n'a PAS le sous-réseau 172.20.168.0/24 dans sa table de routage."
    ],
    BR: [1]
  },
  {
    Q: "Examinez la configuration de l'itinéraire statique illustrée ci-dessous. Lequel des énoncés suivants décrit correctement la configuration de routage statique fournie ? (Choisir deux.)",
    R: [
      "Tout le trafic à 172.20.1.0/24 est abandonné par le Fortigate.",
      "Tant que port1 est en place, tout le trafic à 172.20.1.0/24 est routé par la route statique numéro 1. Si l'interface port1 est en panne, le trafic est routé en utilisant la route blackhole.",
      "L'unité FortiGate ne crée PAS d'entrée de session dans la table de session lorsque le trafic est acheminé par la route du trou noir.",
      "L'unité FortiGate crée une entrée de session dans la table de session lorsque le trafic est acheminé par la route du trou noir."
    ],
    BR: [0, 2]
  },
  {
    Q: "Parmi les champs suivants contenus dans les en-têtes IP/TCP/UDP, lesquels peuvent être utilisés pour prendre une décision de routage lors de l'utilisation du routage basé sur une politique ? (Choisissez trois.)",
    R: [
      "Adresse IP source",
      "TCP flags",
      "Source TCP/UDP ports",
      "Type of service",
      "Checksum"
    ],
    BR: [0, 2, 3]
  },
  {
    Q: "Examiner le diagramme de topologie du réseau dans le tableau. La station de travail avec l'adresse IP 212.10.11.110 envoie un paquet TCP SYN à la station de travail avec l'adresse IP 212.10.11.10. Laquelle des phrases suivantes décrit le mieux le résultat du contrôle de redirection inverse (RFP) exécuté par Fortigate sur les paquets SYN ? (Choisissez deux.)",
    R: [
      "Les paquets sont autorisés si RPF est configuré comme perdu.",
      "Les paquets sont autorisés si RPF est configuré comme strict.",
      "Les paquets sont bloqués si le RPF est configuré comme perdu.",
      "Les paquets sont bloqués si le RPF est configuré comme strict."
    ],
    BR: [0, 3]
  },
  {
    Q: "Lequel des énoncés suivants décrit le mieux ce que fait FortiGate lorsque les paquets correspondent à une route de trou noir ?",
    R: [
      "Les paquets sont perdu.",
      "Les paquets sont routés en fonction des informations dans la table de routage basée sur la stratégie.",
      "Un message d'erreur ICMP est renvoyé à l'expéditeur.",
      "Les paquets sont acheminés en noir à l'expéditeur."
    ],
    BR: [0]
  },
  {
    Q: "La pièce montre deux routes statiques vers les mêmes destinations sous-réseau 172.20.168.0/24. Lequel des énoncés suivants décrit correctement cette configuration de routage statique ? (Choisir deux.)",
    R: [
      "Les deux itinéraires s'afficheront dans le tableau d'acheminement.",
      "L'unité FortiGate partagera également le trafic à 172.20.168.0/24 entre les itinéraires.",
      "Un seul itinéraire apparaîtra dans le tableau d'acheminement.",
      "Le FortiGate acheminera le trafic à 172.20.168.0/24 seulement par une seule route."
    ],
    BR: [2, 3]
  },
  {
    Q: "Lequel des énoncés suivants est vrai en ce qui concerne l'équilibrage de la charge WAN Link ? (Choisir deux.)",
    R: [
      "Il ne peut y avoir qu'un seul lien WAN virtuel par VDOM.",
      "FortiGate peut mesurer la qualité de chaque lien en fonction du pourcentage de latence, de jitter ou de paquets.",
      "Des vérifications de l'état de la liaison peuvent être effectuées sur chaque membre de la liaison dans l'interface WAN virtuel.",
      "Les valeurs de distance et de priorité sont configurées dans chaque membre de lien dans l'interface WAN virtuelle."
    ],
    BR: [0, 2]
  },
  {
    Q: "Dans la sortie de commande de débogage montrée dans l'exposition, qui des suivantes décrit le mieux l'adresse MAC 00:09:0f:69:03:7e ?",
    R: [
      "C'est une des adresses MAC secondaires du port1.",
      "C'est l'adresse MAC primaire de l'interface du port.",
      "C'est l'adresse MAC d'un autre périphérique réseau situé dans le même segment LAN que l'interface port1 de l'unité FortiGate.",
      "C'est l'adresse HA MAC virtuelle."
    ],
    BR: [2]
  },
  {
    Q: "Quelle action le FortiGate prend-il lorsque le moniteur de santé link expire ?",
    R: [
      "Toutes les routes vers le sous-réseau de destination configurées dans le moniteur d'état de la liaison sont supprimées de la table d'acheminement.",
      "Les valeurs de distance de toutes les routes utilisant l'interface configurée dans le moniteur de santé de la liaison sont augmentées.",
      "Les valeurs de priorité de tous les itinéraires utilisant configurer dans le moniteur de santé de lien sont augmentées.",
      "Tous les itinéraires utilisant la passerelle next-hop configurée dans le moniteur de santé de la liaison sont supprimés de la table de routage."
    ],
    BR: [3]
  },
  {
    Q: "Qu'est-ce qui doit être configuré pour garder deux routes statiques vers la même destination dans la table de routage ?",
    R: [
      "La même priorité.",
      "Même distance et même priorité.",
      "La même distance.",
      "La même mesure."
    ],
    BR: [1]
  },
  {
    Q: "L'exposition présente trois routes statiques. Quelles routes seront utilisées pour acheminer les paquets vers l'adresse IP de destination 172.20.168.1 ?",
    R: [
      "L'itinéraire avec les numéros d'identification 2 et 3.",
      "Seulement l'itinéraire avec le numéro d'identification 3.",
      "Seulement l'itinéraire avec le numéro d'identification 2.",
      "Seulement l'itinéraire avec le numéro d'identification 1."
    ],
    BR: [3]
  },
  {
    Q: "La pièce montre un tableau d'acheminement fortigate. Lequel des énoncés suivants est exact ? (Choisir deux.)",
    R: [
      "Il n'y a qu'une seule route active par défaut.",
      "Les valeurs de distance pour la route à 192.168.1.0/24 est 200.",
      "Une adresse IP dans le sous-réseau 172.16.78.0/24 a été assignée à l'interface dmz.",
      "Le FortiGate acheminera le trafic à 172.17.1.2 au prochain saut avec l'adresse IP 192.168.11.254."
    ],
    BR: [0, 3]
  },
  {
    Q: "Voir l'exposition. Il s'agit d'une sortie sniffer d'une demande de connexion telnet de 172.20.120.186 à l'interface port1 de FGT1. En supposant que le service telnet est activé pour port1, lequel des énoncés suivants décrit correctement pourquoi FGT1 ne répond pas ?",
    R: [
      "Le câble port1 est débranché.",
      "La connexion est interrompue en raison de la vérification du cheminement inverse.",
      "La connexion est refusée en raison de la vérification de la politique de transmission.",
      "L'interface port1 de FGT1 est administrativement hors service."
    ],
    BR: [1]
  },
  {
    Q: "Examinez la base de données de routage. Lequel des énoncés suivants est exact ? (Choisissez deux énoncés.)",
    R: [
      "La route par défaut de port3 est la plus basse métrique, ce qui en fait la meilleure route.",
      "Il y aura huit itinéraires actifs dans le tableau d'acheminement.",
      "La distance par défaut de port3 est plus grande que les routes par défaut de port1 et de port2.",
      "Les routeurs par défaut port1 et port2 sont actifs dans la table de routage."
    ],
    BR: [2, 3]
  },
  {
    Q: "Un administrateur a configuré deux interfaces VLAN : Un serveur DHCP est connecté à l'interface VLAN10. Un client DHCP est connecté à l'interface VLAN5. Cependant, le client DHCP ne peut pas obtenir une adresse IP dynamique du serveur DHCP. Quelle est la cause du problème ?",
    R: [
      "Les deux interfaces doivent être dans des VDOM différents.",
      "Les deux interfaces doivent avoir le même ID VLAN.",
      "Le rôle de l'interface VLAN10 doit être défini sur serveur.",
      "Les deux interfaces doivent appartenir au même domaine en aval."
    ],
    BR: [3]
  },
  {
    Q: "Voir l'exemple. Quelles déclarations concernant l'extrait sont vraies ?",
    R: [
      "le port1-VLAN10 et le port2-VLAN10 peuvent être affectés à des VDOM différents.",
      "B. port1-VLAN10 et port2-VLAN10 ne peuvent pas être affectés à des VDOM différents.",
      "C. port1-VLAN1 n'est pas un VLAN valide.",
      "port1-VLAN1 est le VLAN natif pour l'interface physique port1."
    ],
    BR: [0, 3]
  },
  {
    Q: "Voir l'exemple de table de routage. Quelle affirmation est correcte ?",
    R: [
      "A. Le trafic sera transmis normalement.",
      "Le trafic sera abandonné car il ne peut pas être acheminé.",
      "C. Le trafic sera journalisé avant d'être abandonné.",
      "D. Le trafic sera redirigé vers une route de secours."
    ],
    BR: [1]
  },
  {
    Q: "Quand un Fortigate répartit-il le trafic entre deux routes statiques vers le même sous-réseau de destination ?",
    R: [
      "A. Quand ils ont la même distance.",
      "B. Quand ils ont la même priorité.",
      "C. Quand ils ont la même métrique.",
      "Quand ils ont la même distance et la même priorité."
    ],
    BR: [3]
  },
  {
    Q: "Examinez la sortie de la commande get router info routing-table database présentée dans l'illustration ci-dessous. Quelles affirmations sont correctes ?",
    R: [
      "Il y aura six routes dans la table de routage.",
      "B. Il y aura quatre routes dans la table de routage.",
      "Il y aura deux routes par défaut dans la table de routage.",
      "D. Il y aura une seule route par défaut dans la table de routage."
    ],
    BR: [0, 2]
  },
  {
    Q: "Un fortigate fonctionne en mode NAT/Route et est configuré avec deux sous-interfaces de réseau local virtuel (VLAN) ajoutées à la même interface physique. Laquelle des affirmations suivantes est correcte concernant le ID VLAN dans ce scénario ?",
    R: [
      "A. Les deux sous-interfaces VLAN peuvent avoir le même ID VLAN.",
      "Les deux sous-interfaces VLAN doivent avoir des ID VLAN différents.",
      "C. Une seule sous-interface VLAN peut être configurée.",
      "D. Les ID VLAN doivent correspondre au VDOM auquel ils appartiennent."
    ],
    BR: [1]
  },
  {
    Q: "En mode transparent, forward-domain est un paramètre CLI associé à ?",
    R: [
      "A. Un VDOM.",
      "B. Une politique de pare-feu.",
      "Une interface.",
      "D. Une route statique."
    ],
    BR: [2]
  },
  {
    Q: "Examinez la sortie de la commande get router info routing-table all présentée dans la pièce ci-dessous. Laquelle des affirmations suivantes décrit correctement cette sortie ?",
    R: [
      "Les deux routes vers le sous-réseau 10.0.2.0/24 sont des routes ECMP et le trafic sera équilibré en fonction des paramètres ECMP configurés.",
      "B. Seulement la première route vers 10.0.2.0/24 sera active.",
      "C. Les deux routes vers 10.0.2.0/24 sont des routes de secours.",
      "D. La deuxième route vers 10.0.2.0/24 a une priorité plus élevée."
    ],
    BR: [0]
  },
  {
    Q: "Lesquels des énoncés suivants sont VRAIS pour le jumelage de ports et les domaines de transfert ? (Sélectionnez toutes les réponses qui s'appliquent.)",
    R: [
      "A. Ils créent tous deux des domaines de diffusion distincts.",
      "B. Ils ne peuvent contenir que des interfaces physiques.",
      "C. Ils ne peuvent être utilisés qu'en mode NAT/Route.",
      "Ils peuvent contenir des interfaces physiques et/ou virtuelles."
    ],
    BR: [0, 3]
  },
  {
    Q: "En mode Transparent, forward-domain est un attribut de :",
    R: [
      "Une interface.",
      "B. Un VDOM.",
      "C. Une politique de pare-feu.",
      "D. Une route statique."
    ],
    BR: [0]
  },
  {
    Q: "Examinez la sortie de la commande config router ospf présentée dans l'illustration ci-dessous. Laquelle des affirmations suivantes est correcte concernant cette sortie ?",
    R: [
      "A. Les paquets OSPF hello seront envoyés uniquement sur l'interface avec le réseau 10.0.1.0/24.",
      "B. Les paquets OSPF hello seront envoyés uniquement sur l'interface avec le réseau 172.16.0.0/12.",
      "Les paquets OSPF hello seront envoyés sur toutes les interfaces configurées avec une adresse correspondant aux réseaux 10.0.1.0/24 et 172.16.0.0/12.",
      "D. Aucun paquet OSPF hello ne sera envoyé car la configuration est incomplète."
    ],
    BR: [2]
  },
  {
    Q: "Afin de répartir le trafic en utilisant plusieurs routes statiques, les routes doivent être configurées avec les éléments suivants :",
    R: [
      "la même distance et la même priorité.",
      "B. La même distance uniquement.",
      "C. La même priorité uniquement.",
      "D. La même métrique."
    ],
    BR: [0]
  },
  {
    Q: "Si le protocole OSPF (Open Shortest Path First) a déjà été configuré sur une unité Fortigate, laquelle des affirmations suivantes est correcte si les routes apprises par le biais du protocole OSPF doivent être annoncées par le protocole BCP (Border Gateway Protocol) ?",
    R: [
      "A. Aucune configuration supplémentaire n'est nécessaire.",
      "B. L'administrateur réseau doit activer la redistribution BGP dans les paramètres OSPF.",
      "Au minimum, l'administrateur réseau doit activer la fonction Redistribuer OSPF dans ses paramètres BGP.",
      "D. L'administrateur réseau doit désactiver OSPF avant de configurer BGP."
    ],
    BR: [2]
  },
  {
    Q: "Lors de la configuration d'une IP virtuelle équilibrée en termes de charge de serveur, quel est le meilleur algorithme de distribution à utiliser dans les applications où le même serveur de destination physique doit être maintenu entre les sessions ?",
    R: [
      "Statique.",
      "B. Round-robin.",
      "C. Least connections.",
      "D. First alive."
    ],
    BR: [0]
  },
  {
    Q: "Si le protocole d'information de routage (RIP) version 1 ou version 2 a déjà été configuré sur une unité Fortigate, laquelle des affirmations suivantes est correcte si les routes apprises par RIP doivent être adversées dans le protocole OSPF (Open Shortest Path First) ?",
    R: [
      "A. Aucune configuration supplémentaire n'est nécessaire.",
      "B. L'administrateur réseau doit activer la redistribution OSPF dans les paramètres RIP.",
      "Au minimum, l'administrateur réseau doit activer l'option Redistribuer RIP dans les options avancées d'OSPF.",
      "D. L'administrateur réseau doit désactiver RIP avant de configurer OSPF."
    ],
    BR: [2]
  },
  {
    Q: "Lequel des attributs de route suivants doit être égal pour que les routes statiques soient éligibles pour le routage ECMP (equal cost multipath) ?",
    R: [
      "Priorité.",
      "B. Métrique.",
      "Distance.",
      "D. Interface."
    ],
    BR: [0, 2]
  },
  {
    Q: "Examinez le diagramme de réseau et la table de routage FGTI existante présentés dans la pièce à conviction. Quelle est la cause du problème ?",
    R: [
      "A. L'interface de sortie n'est pas configurée correctement.",
      "B. La route statique a une distance administrative trop élevée.",
      "la Passerelle adresse IP n'est pas le même sous-réseau que le port1.",
      "D. Le masque de sous-réseau de la route est incorrect."
    ],
    BR: [2]
  },
  {
    Q: "Examinez le diagramme de réseau présenté dans l'extrait. Quelle affirmation est correcte ?",
    R: [
      "A. 172.16.32.0/24 est directement connecté port 3.",
      "B. 172.16.32.0/24 est directement connecté port 2.",
      "C. 172.16.32.0/24 est accessible via une route statique.",
      "172.16.32.0/24 est directement connecté port 1."
    ],
    BR: [3]
  },
  {
    Q: "Examinez le diagramme de réseau présenté dans l'extrait. Quelles routes seront utilisées pour acheminer le trafic vers 172.20.2.0/24 ? (Choisissez-en deux.)",
    R: [
      "A. 172.20.2.0/24 (1/150) via 10.10.3.1 ; port3(10/0)",
      "B. 172.20.2.0/24 (1/150) via 10.30.3.1 ; port3(10/0)",
      "172.20.2.0/24 (1/150) via 10.10.3.2 ; port3(10/0)",
      "172.20.2.0/24(1/150) via 10.30.3.2, port3(10/0)"
    ],
    BR: [2, 3]
  },
  {
    Q: "Lesquels des paramètres suivants peuvent être configurés par VDOM ?",
    R: [
      "Mode de fonctionnement (NAT/route ou transparent).",
      "Route static.",
      "C. Paramètres HA.",
      "D. Paramètres de licence.",
      "les politiques de pare-feu."
    ],
    BR: [0, 1, 4]
  },
  {
    Q: "Un administrateur fortiGate avec le profil super admin configure un domaine virtuel (VDOM) pour un nouveau client. Après avoir créé le VDOM, l'administrateur est incapable de réaffecter l'interface dmz au nouveau VDOM car l'option est grisée dans l'interface graphique du VDOM de gestion. Quelle pourrait être la cause de ce problème ?",
    R: [
      "A. L'interface dmz n'est pas compatible avec les VDOM.",
      "B. Le nouveau VDOM n'a pas encore été activé.",
      "l'interface dmz est référencée dans la configuration d'un autre VDOM.",
      "D. Les droits du profil super admin ne permettent pas de réaffecter des interfaces."
    ],
    BR: [2]
  },
  {
    Q: "Un Fortigate est configuré avec trois domaines virtuels (VDOM). Laquelle des affirmations suivantes est correcte concernant les VDOM multiples ?",
    R: [
      "A. Chaque VDOM doit fonctionner dans le même mode (NAT/Route ou transparent).",
      "B. Les VDOM ne peuvent pas partager d'interfaces physiques.",
      "C. Le nombre maximum de VDOM est limité à trois.",
      "Le fortigate supporte toute combinaison de VDOMs en mode NAT/Route et en mode transparent."
    ],
    BR: [3]
  },
  {
    Q: "Un dispositif fortigate a deux VDOMs en mode NAT/Route. Laquelle des solutions suivantes peut être mise en œuvre par un administrateur réseau pour acheminer le trafic entre les deux VDOMs ?",
    R: [
      "A. Activer le routage inter-VDOM automatique.",
      "Créer et configurer manuellement un lien inter-VDOM entre vos deux VDOMs.",
      "Interconnecter et configurer une interface physique externe dans un VDOM à une autre interface physique dans le second VDOM.",
      "D. Utiliser une route statique pour acheminer le trafic entre les VDOMs."
    ],
    BR: [1, 2]
  },
  {
    Q: "Un dispositif fortigate est configuré avec deux VDOMs. Le VDOM de gestion est 'root' et est configuré en mode transparent, 'vdom1' est configuré en mode NAT/Route. Quel trafic est généré uniquement par 'root' et non par 'vdom1' ?",
    R: [
      "Traps SNMP.",
      "FortiGuard.",
      "C. Trafic de gestion administratif.",
      "NTP."
    ],
    BR: [0, 1, 3]
  },
  {
    Q: "Lesquelles des affirmations suivantes sont correctes concernant les domaines virtuels (VDOM) de Fortigate ?",
    R: [
      "Les VDOM divisent une seule unité Fortigate en deux ou plusieurs pares-feux indépendants.",
      "Un VDOM de gestion gère le logging SNMP, l'alerte e-mail et les mises à jour de FortiGuard.",
      "C. Chaque VDOM doit avoir sa propre licence.",
      "D. Les VDOM partagent toujours les mêmes politiques de pare-feu."
    ],
    BR: [0, 1]
  },
  {
    Q: "Laquelle des affirmations suivantes est correcte concernant les vdoms multiples configurés dans un dispositif FortiGate ?",
    R: [
      "Les dispositifs FortiGate, à partir du FGT/FWF 60D et plus, prennent tous en charge VDOMS.",
      "B. Tous les modèles FortiGate supportent un nombre illimité de VDOM.",
      "C. Les VDOM ne peuvent être utilisés qu'en mode NAT/Route.",
      "D. Chaque VDOM nécessite une adresse IP de gestion distincte."
    ],
    BR: [0]
  },
  {
    Q: "Une unité FortiGate possède plusieurs VDOM en mode NAT/route avec plusieurs interfaces VLAN dans chaque VDOM. Dans chaque VDOM, lequel des énoncés suivants est correct concernant les adresses IP attribuées à chaque interface VLAN ?",
    R: [
      "A. Chaque interface VLAN doit avoir une adresse IP unique dans tous les VDOMs.",
      "B. Les interfaces VLAN dans le même VDOM peuvent partager des adresses IP.",
      "Différents VLAN peuvent partager la même adresse IP tant qu'ils se trouvent dans des VDOM différents.",
      "D. Toutes les interfaces VLAN doivent utiliser des adresses IP dans le même sous-réseau."
    ],
    BR: [2]
  },
  {
    Q: "Un dispositif FortiGate est configuré avec quatre VDOM : 'root' et 'vdom1' sont en mode NAT/route ; 'vdom2' et 'vdom3' sont en mode transparent. Le VDOM de gestion est 'root'. Lesquels des énoncés suivants sont vrais ? (Choisissez-en deux.)",
    R: [
      "Un lien inter-VDOM entre 'root' et 'vdom1' peut être créé.",
      "An inter-VDOM link between 'vdom1' and vdom2' can created.",
      "C. Un lien inter-VDOM entre 'vdom2' et 'vdom3' peut être créé.",
      "D. Aucun lien inter-VDOM ne peut être créé entre des VDOMs en mode différent."
    ],
    BR: [0, 1]
  },
  {
    Q: "Lesquels des énoncés suivants sont corrects concernant les domaines de diffusion de couche 2 dans les VDOM en mode transparent ? (Choisissez-en deux.)",
    R: [
      "L'ensemble du VDOM est un domaine de diffusion unique, même lorsque plusieurs VLAN sont utilisés.",
      "B. Chaque interface dans un VDOM transparent est son propre domaine de diffusion.",
      "Les interfaces configurées avec le même ID VLAN peuvent appartenir à différents domaines de diffusion.",
      "D. Les domaines de diffusion ne peuvent pas être séparés en mode transparent."
    ],
    BR: [0, 2]
  },
  {
    Q: "Lequel des énoncés suivants est correct concernant les interfaces FortiGate et le protocole spanning tree ? (Choisissez-en deux.)",
    R: [
      "A. Toutes les interfaces FortiGate dans les VDOMs en mode NAT/Route participent à l'arbre de spanning.",
      "Toutes les interfaces FortiGate dans les VDOMs en mode transparent participent à l'arbre de spanning.",
      "C. FortiGate ne supporte pas le protocole spanning tree.",
      "Toutes les interfaces FortiGate dans les VDOMs en mode transparent peuvent bloquer ou transmettre les BPDUs."
    ],
    BR: [1, 3]
  },
  {
    Q: "Un FortiGate est configuré avec plusieurs VDOMs. Un compte administratif sur le périphérique s'est vu attribuer la valeur Scope de VDOM : root. Lesquels des paramètres suivants cet administrateur pourra-t-il configurer ? (Choisissez-en deux.)",
    R: [
      "Adresse du pare-feu.",
      "Serveur DHCP.",
      "C. Paramètres HA.",
      "D. Paramètres de licence globaux."
    ],
    BR: [0, 1]
  },
  {
    Q: "Which statements are correct, based on this output? (Choose two.) Un FortiGate est configuré en HA. Quelles affirmations sont correctes ?",
    R: [
      "La configuration globale est synchronisée entre les FortiGate primaire et secondaire.",
      "Le VDOM racine n'est pas synchronisé entre les FortiGate primaire et secondaire.",
      "Seul le VDOM racine est synchronisé.",
      "La configuration n'est jamais synchronisée en mode HA."
    ],
    BR: [0, 1]
  },
  {
    Q: "Une unité FortiGate est configurée avec trois domaines virtuels (VDOM) comme illustré dans l'exposition. Quelles affirmations sont correctes ? (Choisissez-en trois.)",
    R: [
      "L'administrateur peut configurer des liens inter-VDOM pour éviter d'utiliser des interfaces et des routeurs externes.",
      "Comme pour toutes les interfaces de l'unité FortiGate, des politiques de pare-feu doivent être mises en place pour que le trafic soit autorisé à passer par toute interface, y compris les liaisons inter-VDOM.",
      "Seul le VDOM root peut acheminer le trafic vers Internet.",
      "Chaque VDOM possède une table de routage indépendante.",
      "Comme chaque VDOM possède une table de routage indépendante, des règles de routage doivent être définies (par exemple, routage, statique, OSPF) dans chaque VDOM pour acheminer le trafic entre les VDOM."
    ],
    BR: [0, 1, 4]
  },
  {
    Q: "Quelles déclarations concernant les domaines virtuels (VDOM) sont vraies ? (Choisissez-en deux.)",
    R: [
      "A. Les VDOM ne peuvent pas avoir des modes de fonctionnement différents.",
      "B. Une interface physique ne peut appartenir qu'à un seul VDOM.",
      "Différentes sous-interfaces VLAN de la même interface physique peuvent être assignées à différents VDOM différents.",
      "Chaque VDOM possède sa propre table de routage."
    ],
    BR: [2, 3]
  },
  {
    Q: "Which of the following statements are correct regarding virtual domains (VDOMs)? (Select all that apply.)",
    R: [
      "VDOMs divide a single FortiGate unit into two or more virtual units that function as multiple, independent units.",
      "A management VDOM handles SNMP, logging, alert email, and FDN-based updates.",
      "VDOMs share firmware versions, as well as antivirus and IPS databases.",
      "Each VDOM requires a separate license."
    ],
    BR: [0, 1, 2]
  },
  {
    Q: "Examinez la sortie de diagnostic IPsec de la commande diagnose vpn tunnel list illustrée dans la pièce ci-dessous. Quelles sont les affirmations correctes concernant cette sortie ? (Choisissez-en deux.)",
    R: [
      "L'adresse 172.20.1.1 a été attribuée au client qui se connecte.",
      "Dans les paramètres de la phase 1, la détection des pairs morts est activée.",
      "Le tunnel est inactif.",
      "L'adresse 10.200.3.1 a été attribuée au client qui se connecte."
    ],
    BR: [1, 2]
  },
  {
    Q: "Examinez la configuration de FortiClient IPsec présentée dans l'illustration. Quelle affirmation est correcte concernant cette configuration ?",
    R: [
      "Le client VPN se connectant installera une route vers une destination correspondant à l'objet adresse interne de l'étudiant.",
      "Le client VPN qui se connecte installe une route par défaut.",
      "Le client VPN se connectant installera une route vers la plage d'adresses 172.20.1.[1-5].",
      "Le client VPN se connectera en mode portail web et aucune route ne sera installée."
    ],
    BR: [0]
  },
  {
    Q: "Quel mode IPSec inclut les informations d'identification de l'homologue dans le premier paquet ?",
    R: [
      "Mode principal.",
      "Mode rapide.",
      "Mode agressif.",
      "Mode IKEv2."
    ],
    BR: [2]
  },
  {
    Q: "Vous êtes l'administrateur en charge d'un VPN IPsec point à point entre deux unités FortiGate utilisant le mode route based. Les utilisateurs de chaque côté doivent pouvoir initier de nouvelles sessions sans aucune restriction. Il n'y a qu'un seul sous-réseau à chaque extrémité et le FortiGate possède déjà une route par défaut. Quelles sont les deux étapes de configuration sont nécessaires dans chaque FortiGate pour atteindre ces objectifs ? (Choisissez-en deux.)",
    R: [
      "Créer une politique de pare-feu.",
      "Créer deux politiques de pare-feu.",
      "Ajouter une route vers le sous-réseau distant.",
      "Ajoutez deux phases IPsec 2."
    ],
    BR: [1, 2]
  },
  {
    Q: "Un administrateur souhaite créer un tunnel VPN IPsec entre deux dispositifs FortiGate entre deux appareils FortiGate. Quelles sont les trois étapes de configuration qui doivent être exécutées sur les deux unités pour prendre en charge ce scénario ? (Choisissez-en trois.)",
    R: [
      "Créez des politiques de pare-feu pour autoriser et contrôler le trafic entre les adresses IP source et destination.",
      "Configurez les groupes d'utilisateurs appropriés pour permettre aux utilisateurs d'accéder au tunnel.",
      "Définir le mode de fonctionnement sur le mode VPN IPsec.",
      "Définissez les paramètres de la phase 2.",
      "Définir les paramètres de la phase 1."
    ],
    BR: [0, 3, 4]
  },
  {
    Q: "Quelle action une passerelle IPsec prend-elle avec le trafic utilisateur acheminé vers un VPN IPsec lorsqu'il ne correspond à aucun sélecteur de mode rapide de la phase 2 ?",
    R: [
      "Le trafic est abandonné.",
      "Le trafic est acheminé à travers la phase 2 par défaut.",
      "Le trafic est acheminé vers la prochaine route disponible dans la table de routage.",
      "Le trafic est acheminé en clair vers l'interface où le VPN IPsec se termine."
    ],
    BR: [0]
  },
  {
    Q: "Parmi les méthodes d'authentification suivantes, lesquelles sont prises en charge dans un VPN IPsec phase 1 ? (Choisissez-en deux.)",
    R: [
      "Clés asymétriques.",
      "Certificats numériques racine de l'AC.",
      "Signature RSA.",
      "Clés pré-partagées."
    ],
    BR: [2, 3]
  },
  {
    Q: "Parmi les modes de configuration IPsec suivants, lesquels peuvent être utilisés pour la mise en œuvre de VPN L2TP-over-IPSec ?",
    R: [
      "IPsec basé sur la police uniquement.",
      "IPsec basé sur les routes uniquement.",
      "VPN basé sur les politiques et sur les routes.",
      "L2TP-over-IP Sec n'est pas pris en charge par les dispositifs FortiGate."
    ],
    BR: [2]
  },
  {
    Q: "Parmi les modes de configuration IPsec suivants, lesquels peuvent être utilisés lorsque le FortiGate fonctionne en mode NAT ?",
    R: [
      "VPN basé sur des politiques uniquement.",
      "VPN basé sur les politiques et VPN basé sur les routes.",
      "VPN basé sur les routes uniquement.",
      "Les VPN IPSec ne sont pas pris en charge lorsque le FortiGate fonctionne en mode NAT."
    ],
    BR: [1]
  },
  {
    Q: "Lequel des énoncés suivants est vrai en ce qui concerne les différences entre les VPN IPsec basés sur les flux et les politiques ? (Choisissez-en deux.)",
    R: [
      "Les politiques de pare-feu de type policy-based sont bidirectionnelles. Les politiques de pare-feu basées sur la route, ce n'est pas le cas.",
      "Pour les VPN basés sur la politique, le trafic traversant le tunnel doit être routé vers l'interface IPsec virtuelle. Pour les VPN basés sur les routes, ce n'est pas le cas.",
      "Les politiques de pare-feu pour les VPN basés sur la route peuvent être Accept ou Deny, pour les VPN basés sur la politique, c'est Encrypt.",
      "Le VPN basé sur des politiques utilise une interface IPsec, le VPN basé sur des routes ne le fait pas."
    ],
    BR: [2, 3]
  },
  {
    Q: "Dans quelle partie de la configuration l'administrateur spécifie-t-il le type de configuration IPsec (basée sur les règles ou sur la route) ?",
    R: [
      "Dans les paramètres globaux du VPN IPsec.",
      "Sous les paramètres de la phase 2.",
      "Sous les paramètres de la phase 1.",
      "Sous les paramètres de la politique du pare-feu."
    ],
    BR: [0]
  },
  {
    Q: "Laquelle des options suivantes définit le mieux ce qu'est Diffie-Hellman ?",
    R: [
      "Un algorithme de chiffrement symétrique.",
      "Un protocole d'\"accord sur les clés\".",
      "Un protocole de \"Security-association-agreement\".",
      "Un algorithme d'authentification."
    ],
    BR: [1]
  },
  {
    Q: "Combien de paquets sont échangés entre les deux extrémités d'IPSec pendant la négociation d'une phase 1 en mode principal ?",
    R: [
      "5",
      "3",
      "2",
      "6"
    ],
    BR: [3]
  },
  {
    Q: "Lequel des modes IKE suivants est utilisé pendant la phase 2 de la négociation IPsec ?",
    R: [
      "Mode agressif.",
      "Mode rapide.",
      "Mode principal.",
      "Mode IKEv2."
    ],
    BR: [1]
  },
  {
    Q: "Lesquels des énoncés suivants sont vrais au sujet des VPN IPsec ? (Choisissez-en trois.)",
    R: [
      "IPsec augmente les frais généraux et la bande passante.",
      "IPsec fonctionne au niveau de la couche 2 du modèle OSI.",
      "Les applications réseau de l'utilisateur final doivent être correctement préconfigurées pour envoyer le trafic à travers le VPN IPSEC.",
      "IPsec protège les protocoles de la couche supérieure.",
      "IPsec fonctionne au niveau de la couche 3 du modèle OSI."
    ],
    BR: [0, 3, 4]
  },
  {
    Q: "Lesquels des énoncés suivants sont corrects concernant les configurations VPN dialup IPsec pour les dispositifs FortiGate ? (Choisissez-en deux.)",
    R: [
      "Le mode principal doit être utilisé lorsqu'il n'y a pas plus d'un VPN de connexion IPsec configuré sur le même dispositif FortiGate.",
      "Un appareil FortiGate avec un VPN IPsec configuré en mode commuté peut initier une connexion tunnel vers n'importe quelle adresse IP distante.",
      "Peer ID doit être utilisé lorsqu'il y a plus d'un VPN IPsec commuté en mode agressif sur le même dispositif FortiGate.",
      "Le FortiGate ajoute automatiquement une route statique à l'adresse de sélecteur de mode rapide source reçue de chaque homologue distant."
    ],
    BR: [2, 3]
  },
  {
    Q: "Lesquelles des combinaisons suivantes de deux configurations de dispositifs FortiGate (côté A et côté B), peut être utilisée pour établir avec succès un VPN IPsec entre eux ? (Choisissez-en deux.)",
    R: [
      "Côté A : mode principal, passerelle distante en tant qu'adresse IP statique, VPN basé sur une politique. Côté B : mode agressif, passerelle distante comme adresse IP statique, VPN basé sur une politique.",
      "Côté A : mode principal, passerelle distante en tant qu'adresse IP statique, VPN basé sur des règles. Côté B : mode principal, passerelle distante comme adresse IP statique, VPN basé sur les routes.",
      "Côté A : mode principal, passerelle distante en tant qu'adresse IP statique, VPN basé sur des règles. Côté B : mode principal, passerelle distante en tant qu'accès commuté, VPN basé sur la route.",
      "Côté A : mode principal, passerelle distante en tant que VPN à base de politique d'accès commuté. Côté B : mode principal, passerelle distante en tant qu'accès commuté, VPN basé sur des règles."
    ],
    BR: [1, 2]
  },
  {
    Q: "Quelle est l'affirmation correcte concernant un VPN IPsec avec la passerelle distante paramétrée comme 'Dynamic DNS' ? Un ThéFortiGale acceptera une connexion VPN IPsec à partir de n'importe quelle adresse IP.",
    R: [
      "Un FortiGate acceptera une connexion VPN IPsec à partir de n'importe quelle adresse IP.",
      "La résolution FaDN, l'adresse IP locale du Fortifale doit être fournie par un fournisseur de DNS dynamique.",
      "FortiGate acceptera les connexions IP VPN sec uniquement à partir des adresses IP incluses dans une liste d'accès DNS dynamique.",
      "L'adresse IP de la passerelle distante peut changer dynamiquement."
    ],
    BR: [3]
  },
  {
    Q: "Lesquels des énoncés suivants sont corrects concernant la configuration du mode IKE ? (Choisissez-en deux.)",
    R: [
      "Il peut attribuer dynamiquement des adresses IP aux clients VPN IPsec.",
      "Il peut attribuer dynamiquement des paramètres DNS aux clients VPN IPsec.",
      "Il utilise le protocole ESP.",
      "Il peut être activé dans la configuration de la phase 2."
    ],
    BR: [0, 1]
  },
  {
    Q: "Lesquels des énoncés suivants sont corrects concernant la phase 1 et la phase 2 d'IPsec, illustrées dans l'exposition ? (Choisissez-en deux.)",
    R: [
      "Le sélecteur de mode rapide du site distant doit également être O.0.0.0/0 pour les adresses source et destination.",
      "Seuls les pairs distants avec l'ID de pair 'fortinet' seront en mesure d'établir un VPN.",
      "Le dispositif FortiGate ajoutera automatiquement une route statique à l'adresse du sélecteur de mode rapide source reçue de chaque pair VPN distant.",
      "La configuration ne fonctionnera que pour établir des tunnels FortiClient-to-FortiGate. Un tunnel FortiGate nécessite une configuration différente."
    ],
    BR: [2, 3]
  },
  {
    Q: "La pièce à conviction montre une partie de la sortie de la commande de diagnostic 'diagnose debug application ike 255', prise pendant l'établissement d'un VPN. Lesquels des énoncés suivantes sont correctes concernant cette sortie ? (Choisissez-en deux.)",
    R: [
      "Les sélecteurs de mode rapide négociés entre les deux VPN pers IPsec sont 0.0.0.0/32 pour les adresses de source et de destination.",
      "La sortie correspond à une négociation de phase 2.",
      "NAT-T activé et il y a un troisième périphérique sur le chemin qui effectue le NAT du trafic entre les deux pairs VPN IPsec.",
      "L'adresse IP du pair VPN IPsec distant est 172.20.187.114."
    ],
    BR: [1, 2]
  },
  {
    Q: "Lesquels des protocoles suivants sont définis dans la norme IPsec ? (Choisissez-en deux.)",
    R: [
      "AH",
      "GRE",
      "SSL/TLS",
      "ESP"
    ],
    BR: [0, 3]
  },
  {
    Q: "Quels objets de configuration sont automatiquement ajoutés lors de l'utilisation de l'assistant de configuration VPN du FortiGate FortiClient VPN Configurations Wizard ? (Choisissez-en deux.)",
    R: [
      "Route statique.",
      "Phase 1.",
      "Groupe d'utilisateurs.",
      "Phase 2."
    ],
    BR: [1, 3]
  },
  {
    Q: "Quels sont les objectifs de la traversée NAT dans IPsec ? (Choisissez-en deux.)",
    R: [
      "Détecter les dispositifs NAT intermédiaires sur le chemin du tunnel.",
      "Encapsuler les paquets ESP dans des paquets UDP en utilisant le port 4500.",
      "Forcer un nouvel échange DH à chaque re-clé de phase 2.",
      "Changer dynamiquement le mode de négociation de la phase 1 en mode agressif."
    ],
    BR: [0, 1]
  },
  {
    Q: "Affichez la pièce à conviction. Lesquels des énoncés suivants sont corrects ? (Choisissez-en deux.)",
    R: [
      "Il s'agit d'une configuration IPsec redondante.",
      "La route TunnelB est la route principale pour la recherche du site distant. La route TunnelA est utilisée uniquement si le VPN TunnelB est en panne.",
      "Cette configuration nécessite au moins deux politiques de pare-feu dont l'action est définie sur IPsec.",
      "La détection des pairs morts doit être désactivée pour prendre en charge ce type de configuration IPsec."
    ],
    BR: [0, 1]
  },
  {
    Q: "Examinez la configuration du FortiClient IPsec présentée dans l'illustration. Quelle affirmation est correcte concernant cette configuration ?",
    R: [
      "Le client VPN se connectant installera une route vers une destination correspondant à l'objet d'adresse interne de l'étudiant.",
      "Le client VPN se connectant installera une route par défaut.",
      "Le client VPN se connectant va installer une route vers la plage d'adresses 172.20.1.[1-5].",
      "Le client VPN se connectera en mode portail web et aucune route ne sera installée."
    ],
    BR: [0]
  },
  {
    Q: "Parmi les affirmations suivantes, lesquelles décrivent certaines des différences entre cryptographie symétrique et asymétrique ? (Choisissez-en deux.)",
    R: [
      "Dans la cryptographie symétrique, les clés sont accessibles au public. Dans le cas de la cryptographie asymétrique, les clés doivent être gardées secrètes.",
      "La cryptographie asymétrique permet de chiffrer les données plus rapidement que la cryptographie symétrique.",
      "La cryptographie symétrique utilise une clé pré-partagée. La cryptographie asymétrique utilise une paire de clés.",
      "Les clés asymétriques peuvent être envoyées à l'homologue distant via des certificats numériques. Les clés symétriques ne le peuvent pas."
    ],
    BR: [2, 3]
  },
  {
    Q: "Lequel des énoncés suivants décrit le mieux ce qu'est une autorité de certification publique (CA) ?",
    R: [
      "Un service qui fournit un certificat numérique à chaque fois qu'un utilisateur s'authentifie.",
      "Une entité qui certifie que les informations contenues dans un certificat numérique sont valides et vraies.",
      "Le processus FortiGate chargé de générer des certificats numériques à la volée à des fins d'inspection SSL.",
      "Un service qui valide les certificats numériques à des fins d'authentification basée sur des certificats."
    ],
    BR: [3]
  },
  {
    Q: "Dans une configuration IPSec de passerelle à passerelle, deux unités FortiGate créent un tunnel VPN entre deux réseaux privés distincts. Lesquelles des étapes de configuration suivantes doivent être exécutées sur les deux unités FortiGate pour prendre en charge cette configuration ? (Sélectionnez toutes les réponses applicables.)",
    R: [
      "Créez des politiques de pare-feu pour contrôler le trafic entre l'adresse IP source et l'adresse de destination.",
      "Configurer les groupes d'utilisateurs appropriés sur les unités FortiGate pour permettre aux utilisateurs d'accéder à la connexion VPN.",
      "Configurer le mode de fonctionnement de l'unité FortiGate en mode VPN IPSec.",
      "Définir les paramètres de phase 2 dont l'unité FortiGate a besoin pour créer un tunnel VPN avec le pair distant.",
      "Définissez les paramètres de phase 1 dont l'unité FortiGate a besoin pour authentifier les homologues distants."
    ],
    BR: [0, 3, 4]
  },
  {
    Q: "Vous êtes l'administrateur responsable d'une unité FortiGate qui fait office de passerelle VPN. Vous avez choisi d'utiliser le mode interface lors de la configuration du tunnel VPN et vous souhaitez que les utilisateurs de chaque côté puissent initier de nouvelles connexions. Il n'y a qu'un seul sous-réseau à chaque extrémité et l'unité Fortifate a déjà une route par défaut. Lesquelles des étapes de configuration suivantes sont nécessaires pour atteindre ces objectifs ? (Sélectionnez toutes les applicables.)",
    R: [
      "Créer une politique de pare-feu.",
      "Créer deux politiques de pare-feu.",
      "Ajouter une route pour le sous-réseau distant.",
      "Ajoutez une route pour le trafic entrant.",
      "Créez une définition de phase 1.",
      "Créer une définition de phase 2."
    ],
    BR: [1, 2, 4, 5]
  },
  {
    Q: "Laquelle des affirmations suivantes doit être vraie pour qu'un certificat numérique soit valide ? (Choisissez-en deux.)",
    R: [
      "Il doit être signé par une autorité de certification \"de confiance\".",
      "Il doit être répertorié comme valide dans une liste de révocation de certificats (CRL).",
      "Le champ CA doit être \"TRUE\".",
      "Il doit être encore dans sa période de validité."
    ],
    BR: [0, 3]
  },
  {
    Q: "Pourquoi devez-vous utiliser le mode agressif lorsqu'une passerelle FortiGate IPSec locale héberge plusieurs tunnels dialup ?",
    R: [
      "En mode agressif, les homologues distants sont en mesure de fournir leur ID d'homologue dans le premier message.",
      "FortiGate est capable de gérer les connexions NATées uniquement en mode agressif.",
      "FortiClient ne prend en charge que le mode agressif.",
      "Le mode principal ne prend pas en charge XAuth pour l'authentification des utilisateurs."
    ],
    BR: [0]
  },
  {
    Q: "Parmi les conditions suivantes, quelles sont celles qui sont requises pour établir un VPN IPSec entre deux dispositifs FortiGate ? (Choisissez-en deux.)",
    R: [
      "Si XAuth est activé en tant que serveur dans un homologue, il doit être activé en tant que client dans l'autre homologue.",
      "Si le VPN est configuré en fonction de la route, il doit y avoir au moins une politique de pare-feu dont l'action est définie sur IPSec.",
      "Si le VPN est configuré en tant qu'utilisateur DialUp dans un homologue, il doit être configuré en tant qu'adresse IP statique ou DNS dynamique dans l'autre homologue.",
      "Si le VPN est configuré en tant que politique dans un pair, il doit également être configuré en tant que politique dans l'autre pair."
    ],
    BR: [0, 2]
  },
  {
    Q: "Au cours du processus de vérification numérique, la comparaison des résultats du hachage original et du nouveau hachage satisfait à quelle exigence de sécurité ?",
    R: [
      "L'authentification.",
      "L'intégrité des données.",
      "Non-répudiation.",
      "Vérification de la signature."
    ],
    BR: [1]
  },
  {
    Q: "Lesquels des énoncés suivants concernant les tunnels IPsec basés sur des politiques sont vrais ? (Choisissez-en deux.)",
    R: [
      "Ils peuvent être configurés en mode de fonctionnement NAT/Route et transparent.",
      "Ils prennent en charge L2TP-over-IPsec.",
      "Ils nécessitent deux politiques de pare-feu : une pour chaque direction du flux de trafic.",
      "Ils prennent en charge GRE-over-IPsec."
    ],
    BR: [0, 1]
  },
  {
    Q: "Examinez la configuration de la phase 1 d'IPsec dans l'illustration ci-dessous, puis répondez à la question suivante. Lesquels des énoncés suivants sont corrects concernant cette configuration ? (Sélectionnez toutes les réponses qui s'appliquent.)",
    R: [
      "La phase 1 est destinée à une configuration VPN basée sur les routes.",
      "La phase 1 est destinée à une configuration VPN basée sur des règles.",
      "L'IP de la passerelle locale est l'adresse attribuée au port1.",
      "L'adresse IP de la passerelle locale est 10.200.3.1."
    ],
    BR: [0, 2]
  },
  {
    Q: "Examinez la configuration de la route statique pour IPsec présentée dans la pièce à conviction, puis répondez à la question ci-dessous. Quelles sont les affirmations correctes concernant cette configuration ? (Choisissez-en deux.)",
    R: [
      "L'interface remote est une interface IPsec.",
      "Une adresse de passerelle n'est pas nécessaire car l'interface est une connexion point à point.",
      "Une adresse de passerelle n'est pas nécessaire car la route par défaut est utilisée.",
      "L'interface distante est une zone."
    ],
    BR: [0, 1]
  },
  {
    Q: "Passez en revue la configuration de la phase 1 d'IPsec dans l'exposition ; puis répondez à la question ci-dessous. Quelles déclarations sont correctes concernant cette configuration ? (Choisissez-en deux.)",
    R: [
      "L'adresse de la passerelle distante est 10.200.3.1.",
      "L'adresse de l'interface IPsec locale est 10.200.3.1.",
      "L'adresse IP de la passerelle locale est l'adresse attribuée au port 1.",
      "L'adresse IP de la passerelle locale est 10.200.3.1."
    ],
    BR: [0, 2]
  },
  {
    Q: "Examinez la configuration de la phase 2 d'IPsec présentée dans l'illustration ; puis répondez à la question ci-dessous. Quelles sont les affirmations correctes concernant cette configuration ? (Choisissez-en deux.)",
    R: [
      "La phase 2 se réactive même s'il n'y a pas de trafic.",
      "Il y aura un échange de DH pour chaque re-clé.",
      "Le numéro de séquence des paquets ESp reçus de l'homologue ne sera pas vérifié.",
      "Les sélecteurs de mode rapide seront par défaut ceux utilisés dans la politique de pare-feu."
    ],
    BR: [0, 1]
  },
  {
    Q: "Quelles options de journalisation sont prises en charge sur une unité FortiGate ? (Choisissez-en deux.)",
    R: [
      "LDAP",
      "Syslog",
      "FortiAnalyzer",
      "SNMP"
    ],
    BR: [1, 2]
  },
  
  {
    Q: "Examinez la configuration de la route statique pour IPsec présentée dans la pièce à conviction, puis répondez à la question ci-dessous. Quelles sont les affirmations correctes concernant cette configuration ? (Choisissez-en deux.)",
    R: [
      "A. L'interface remote est une interface IPsec.",
      "B. Une adresse de passerelle n'est pas nécessaire car l'interface est une connexion point à point.",
      "C. Une adresse de passerelle n'est pas nécessaire car la route par défaut est utilisée.",
      "D. L'interface distante est une zone."
    ],
    BR: [0, 1]
  },
  {
    Q: "Passez en revue la configuration de la phase 1 d'IPsec dans l'exposition ; puis répondez à la question ci-dessous. Quelles déclarations sont correctes concernant cette configuration ? (Choisissez-en deux.) (Image p47)",
    R: [
      "A. L'adresse de la passerelle distante est 10.200.3.1",
      "B. L'adresse de l'interface IPsec locale est 10.200.3.1",
      "C. L'adresse IP de la passerelle locale est l'adresse attribuée au port 1.",
      "D. L'adresse IP de la passerelle locale est 10.200.3.1"
    ],
    BR: [0, 2]
  },
  {
    Q: "Examinez la configuration de la phase 2 d'IPsec présentée dans l'illustration ; puis répondez à la question ci-dessous. Quelles sont les affirmations correctes concernant cette configuration ? (Choisissez-en deux.) (Image p47)",
    R: [
      "A. La phase 2 se réactive même s'il n'y a pas de trafic.",
      "B. Il y aura un échange de DH pour chaque re-clé.",
      "C. Le numéro de séquence des paquets ESp reçus de l'homologue ne sera pas vérifié.",
      "D. Les sélecteurs de mode rapide seront par défaut ceux utilisés dans la politique de pare-feu."
    ],
    BR: [0, 1]
  },
  {
    Q: "Quelles options de journalisation sont prises en charge sur une unité FortiGate ? (choisissez-en 2)",
    R: [
      "LDAP",
      "Syslog",
      "FortiAnalyzer",
      "SNMP"
    ],
    BR: [1, 2]
  },
  {
    Q: "À quel périphérique distant le FortiGate peut-il envoyer des journaux ? (Choisissez-en trois.)",
    R: [
      "A. Syslog",
      "B. FortiAnalyzer",
      "C. Disque dur",
      "D. Mémoire",
      "E. FortiCloud"
    ],
    BR: [0, 1, 4]
  },
  {
    Q: "Dans un journal de collision, qu'indique l'état O ?",
    R: [
      "A. La fin anormale d'un processus",
      "B. Un processus fermé pour une raison quelconque",
      "C. Le processus Scanunitd s'est écrasé",
      "D. Arrêt normal sans aucune anomalie",
      "E. Le processus DHCP s'est écrasé"
    ],
    BR: [3]
  },
  {
    Q: "Il existe huit (8) niveaux de gravité des journaux qui indiquent l'importance d'un événement. Sans compter Debug, qui n'est nécessaire que pour enregistrer des données de diagnostic, quels sont les niveaux de gravité les plus bas ET les plus élevés ?",
    R: [
      "A. Notification, urgence",
      "B. Information. Critique",
      "C. Erreur. Critique",
      "D. Information, Urgence",
      "E. Information, alerte"
    ],
    BR: [3]
  },
  {
    Q: "Examinez cette entrée de journal. Qu'indique le journal ? (Choisissez-en trois.) [date=2013-12-04 time=09:30:18 logid=0100032001 type=event sous-type=system level=information vd=root utilisateur=admin ui=http(192.168.1.112) action=login status=success]",
    R: [
      "A. Dans l'interface graphique, l'entrée du journal se trouve sous \"Log & Report > Event Log > User\".",
      "B. Dans l'interface graphique, l'entrée du journal se trouve sous \"Log & Report > Event Log > System\".",
      "C. Dans l'interface graphique, l'entrée du journal se trouve sous \"Log & Report > Traffic Log > Local Traffic\".",
      "D. La connexion était cryptée.",
      "E. La connexion n'était pas cryptée.",
      "F. L'adresse IP de l'interface FortiGate à laquelle \"admin\" s'est connecté est 192.168.1.112.",
      "G. L'adresse IP de l'ordinateur à partir duquel \"admin\" s'est connecté est 192.168.1.112."
    ],
    BR: [1, 4, 6]
  },
  {
    Q: "Où sont consignés la plupart des événements de sécurité ?",
    R: [
      "A. Journal de sécurité",
      "B. Journal du trafic de transfert",
      "C. Journal des événements",
      "D. Journal des alertes",
      "E. Console de surveillance des alertes"
    ],
    BR: [2]
  },
  {
    Q: "Qu'est-ce qui détermine si un message de journal est généré ou non ?",
    R: [
      "A. Paramètres de la politique de pare-feu",
      "B. Paramètres du journal dans l'interface graphique",
      "C. Commande 'config log' dans l'interface CLI",
      "D. Syslog",
      "E. Webtrends"
    ],
    BR: [0]
  },
  {
    Q: "Lesquels des éléments suivants sont considérés comme des types de journaux ? (Choisissez-en trois.)",
    R: [
      "A. Journal de transmission",
      "B. Journal du trafic",
      "C. Syslog",
      "D. Journal des événements",
      "E. Journal de sécurité"
    ],
    BR: [1, 3, 4]
  },
  {
    Q: "Quels attributs sont toujours inclus dans l'en-tête d'un journal ? (Choisissez-en trois.)",
    R: [
      "A. policyid",
      "B. niveau",
      "C. utilisateur",
      "D. L'horodatage",
      "E. sous-type",
      "F. durée"
    ],
    BR: [1, 3, 4]
  },
  {
    Q: "Quel type de journal indique si un VPN est en train de monter ou de descendre ?",
    R: [
      "A. Journal des événements",
      "B. Journal de sécurité",
      "C. Journal des transferts",
      "D. Syslog"
    ],
    BR: [0]
  },
  {
    Q: "Dans la sortie \"diag debug flow\", vous voyez le message \"Allowed by Policy-1 : SNAT\" (Autorisé par la politique 1 : SNAT). Qu'est-ce qui est vrai ?",
    R: [
      "A. Le paquet correspond à la politique la plus élevée de la liste des politiques de pare-feu.",
      "B. Le paquet correspond à la politique de pare-feu dont l'ID de politique est 1.",
      "C. Le paquet correspond à une politique de pare-feu qui autorise le paquet et ignore les contrôles UTM.",
      "D. La politique autorise le paquet et applique le NAT de session."
    ],
    BR: [1]
  },
  {
    Q: "Si vous activez l'option \"Generate Logs when Session Starts\" (Générer des journaux au début de la session), quel effet cela a sur le nombre de messages du journal du trafic générés pour chaque session ?",
    R: [
      "A. Aucun message du journal du trafic n'est généré.",
      "B. Un message du journal du trafic est généré.",
      "C. Deux messages du journal du trafic sont générés.",
      "D. Un message de journal est généré uniquement en cas d'événement de sécurité."
    ],
    BR: [2]
  },
  {
    Q: "Quel est le comportement de FortiGate lorsque la journalisation du disque local est désactivée ?",
    R: [
      "A. Seuls les journaux en temps réel apparaissent sur le tableau de bord de FortiGate.",
      "B. Aucun journal n'est généré.",
      "C. Les e-mails d'alerte sont désactivés.",
      "D. La journalisation à distance est automatiquement activée."
    ],
    BR: [0]
  },
  {
    Q: "Un administrateur doit pouvoir consulter les journaux d'utilisation des applications sur votre réseau. Quelles configurations sont nécessaires pour que FortiGate génère des journaux pour l'activité d'utilisation des applications ? (Choisissez-en deux.)",
    R: [
      "A. Activez un profil de filtrage Web sur la stratégie de pare-feu.",
      "B. Créer une politique de contrôle des applications.",
      "C. Activer la journalisation sur la politique de pare-feu.",
      "D. Activer un profil de sécurité de contrôle d'application sur la politique de pare-feu."
    ],
    BR: [1, 3]
  },
  {
    Q: "Un administrateur doit décharger la journalisation vers FortiAnalyzer à partir d'une FortiGate avec un disque dur interne. Quelles déclarations sont vraies ? (Choisissez-en deux.)",
    R: [
      "A. Les journaux doivent être stockés sur la FortiGate avant d'être transmis à FortiAnalyzer.",
      "B. FortiGate utilise le port 8080 pour la transmission des journaux",
      "C. Les messages de journal sont transmis en texte brut au format compressé LZ4 (méthode de stockage et de téléchargement).",
      "D. FortiGate peut crypter les communications en utilisant le trafic OFTP crypté par SSL."
    ],
    BR: [0, 2]
  },
  {
    Q: "Lesquels des énoncés suivants sont vrais concernant le contrôle des applications ? (Choisissez-en deux.)",
    R: [
      "A. Le contrôle des applications est basé sur les numéros de port de destination TCP.",
      "B. Le contrôle des applications est basé sur le proxy.",
      "C. Le trafic crypté peut être identifié par le contrôle des applications.",
      "D. La mise en forme du trafic peut être appliquée au trafic d'application détecté."
    ],
    BR: [2, 3]
  },
  {
    Q: "La pièce à conviction est une capture d'écran d'un profil de contrôle d'application. (Image p50) Les différents paramètres sont encerclés et numérotés. Sélectionnez le numéro identifiant le paramètre qui fournira des informations supplémentaires sur l'accès à YouTube, comme le nom de la vidéo regardée.",
    R: [
      "A. 1",
      "B. 2",
      "C. 3",
      "D. 4",
      "E. 5"
    ],
    BR: [3]
  },
  {
    Q: "Comment les signatures de contrôle des applications sont-elles mises à jour sur un dispositif FortiGate ?",
    R: [
      "A. Par le biais des mises à jour FortiGuard.",
      "B. En mettant à niveau le micrologiciel FortiOS vers une version plus récente.",
      "C. En exécutant la fonction d'apprentissage automatique d'Application Control.",
      "D. Les signatures sont codées en dur sur le dispositif et ne peuvent pas être mises à jour."
    ],
    BR: [0]
  },
  {
    Q: "Quelle réponse décrit le mieux ce qu'est une \"application inconnue\" ?",
    R: [
      "A. Tout le trafic qui correspond à la signature interne des applications inconnues.",
      "B. Le trafic qui ne correspond pas au modèle RFC pour son protocole.",
      "C. Tout le trafic qui ne correspond pas à une signature de contrôle d'application.",
      "D. Un paquet qui échoue au contrôle CRC."
    ],
    BR: [2]
  },
  {
    Q: "Quelles actions sont possibles avec le contrôle des applications ? (Choisissez-en trois.)",
    R: [
      "A. Prévenir",
      "B. Autoriser",
      "C. Bloquer",
      "D. Mise en forme du trafic",
      "E. Mise en quarantaine"
    ],
    BR: [1, 2, 3]
  },
  {
    Q: "Quel est le nombre maximum de dispositifs FortiAnalyzer/FortiManager vers lesquels une unité FortiGate peut être configurée pour envoyer des journaux ?",
    R: [
      "A. 1",
      "B. 2",
      "C. 3",
      "D. 4"
    ],
    BR: [2]
  },
  {
    Q: "Concernant les sections d'en-tête et de corps des messages de journal bruts, quelle affirmation est correcte ?",
    R: [
      "A. La disposition des sections d'en-tête et de corps change en fonction du type de journal.",
      "B. La disposition de la section d'en-tête est toujours la même, quel que soit le type de journal. La disposition de la section du corps change en fonction du type de journal.",
      "C. Certains types de journaux comprennent plusieurs sections de corps.",
      "D. Certains types de journaux n'incluent pas de section de corps."
    ],
    BR: [1]
  },
  {
    Q: "Un dispositif FortiAnalyzer peut utiliser quelle méthode de sécurité pour sécuriser le transfert des données de journal provenant des dispositifs FortiGate ?",
    R: [
      "A. SSL",
      "B. IPSec",
      "C. connexion série directe",
      "D. S/MIME"
    ],
    BR: [1]
  },
  {
    Q: "Une politique de pare-feu a été configurée de sorte que la journalisation du trafic soit désactivée et qu'une fonction UTM soit activée. En outre, le paramètre système \"utm-incident-traffic-log\" a été activé. Dans quel journal un message d'événement UTM sera-t-il stocké ?",
    R: [
      "A. Traffic",
      "B. UTM",
      "C. Système",
      "D. Aucun"
    ],
    BR: [0]
  },
  {
    Q: "Laquelle des affirmations suivantes est correcte concernant les messages de journal bruts ?",
    R: [
      "A. Les journaux comportent une section d'en-tête et une section de corps. L'en-tête a la même présentation pour chaque message de journal. La section du corps change de présentation d'un type de message de journal à l'autre.",
      "B. Les journaux ont un en-tête et un corps. L'en-tête et le corps changent de présentation d'un type de message de journal à l'autre.",
      "C. Les journaux ont un en-tête et un corps. L'en-tête et le corps ont la même présentation pour chaque message de journal.",
      "D. (autre option)"
    ],
    BR: [0]
  },
  {
    Q: "Lequel des points suivants est un avantage de l'utilisation de SNMP v3 au lieu de SNMP v1/v2 lors de l'interrogation de la FortiGate ?",
    R: [
      "A. Le cryptage des paquets",
      "B. Téléchargement de rapports basés sur les MIB",
      "C. Limitation de l'accès SNMP par des listes d'accès",
      "D. L'exécution du service SNMP sur un port non standard est possible."
    ],
    BR: [0]
  },
  {
    Q: "Un administrateur souhaite générer un rapport indiquant le trafic le plus élevé par type de service, mais il veut exclure le trafic SMTP du rapport. Lequel des énoncés suivants décrit le mieux la façon de procéder ?",
    R: [
      "A. Dans le champ Service du filtre de données, tapez 25/smtp et cochez la case NOT.",
      "B. Ajoutez l'entrée suivante à la section Champ générique du filtre de données : service=\"lsmtp\".",
      "C. Lors de l'édition du graphique, décochez la case mlog pour indiquer que les données de filtrage de courrier sont exclues lors de la génération du graphique.",
      "D. Lors de l'édition du graphique, entrez \"dns\" dans le champ Exclure le service."
    ],
    BR: [0]
  },
  {
    Q: "Lorsque vous effectuez une recherche de journaux sur un FortiAnalyzer, il est généralement d'utiliser l'option de recherche rapide. Quelle est une raison valable pour utiliser l'option Full Search à la place ?",
    R: [
      "A. Les éléments de recherche que vous recherchez ne sont pas contenus dans les champs de journal indexés.",
      "B. Une recherche rapide ne porte que sur les données reçues au cours des 24 dernières heures.",
      "C. Vous souhaitez que la recherche inclue les journaux locaux du FortiAnalyzer.",
      "D. Vous souhaitez que la recherche inclue également les données d'archive de contenu."
    ],
    BR: [0]
  },
  {
    Q: "Les e-mails d'alerte permettent à l'unité FortiGate d'envoyer des notifications à une adresse e-mail lors de la détection d'un type d'événement prédéfini. Lesquels des éléments suivants sont parmi les types d'événements disponibles dans Web Config ? (Sélectionnez toutes les réponses applicables.)",
    R: [
      "A. Intrusion détectée.",
      "B. Authentification réussie du pare-feu",
      "C. Fichier surdimensionné détecté.",
      "D. Adresse DHCP attribuée.",
      "E. Erreur de classement de FortiGuard Web Filtering détectée."
    ],
    BR: [0]
  },
  {
    Q: "Regardez la pièce à conviction. Qu'indique ce journal brut ? (Choisissez-en deux.) [eventtype=Etgd bik level=warning type=utm subtype=webfilter ... action=blocked ... msg=URL belongs to a category with warnings activated] (Image p52)",
    R: [
      "A. FortiGate a bloqué le trafic.",
      "B. Le type indique qu'un événement de sécurité a été enregistré.",
      "C. 10.0.1.20 est l'adresse IP de la lavito.tk.",
      "D. policyid indique que le trafic est passé par la politique de pare-feu IPS."
    ],
    BR: [0, 1]
  },
  {
    Q: "Par défaut, lors de la journalisation sur disque, quand FortiGate supprime-t-il les journaux ?",
    R: [
      "A. 30 jours",
      "B. 1 an",
      "C. Jamais",
      "D. 7 jours"
    ],
    BR: [3]
  },
  {
    Q: "Un administrateur a configuré les paramètres suivants : config system settings / set ses-denied-traffic enable / end / config system global / set block-session-timer 30 / fin. Que fait cette configuration ? (Choisissez-en deux.)",
    R: [
      "A. Réduit la quantité de journaux générés par le trafic refusé.",
      "B. Renforce la détection des périphériques sur toutes les interfaces pendant 30 minutes.",
      "C. Bloque les utilisateurs refusés pendant 30 minutes.",
      "D. Crée une session pour le trafic refusé."
    ],
    BR: [2, 3]
  },
  {
    Q: "Lequel des éléments suivants ne prend PAS en charge la fonction de journalisation ?",
    R: [
      "A. Filtre de fichiers",
      "B. Contrôle des applications",
      "C. Délais de session",
      "D. Activités de l'administrateur",
      "E. Filtrage des URL Web"
    ],
    BR: [2]
  },
  {
    Q: "Lesquels des énoncés suivants sont corrects en ce qui concerne la journalisation à la mémoire sur d'une unité FortiGate ?",
    R: [
      "A. Lorsque le système a atteint sa capacité de stockage de messages de consignation, l'unité FortiGate arrête la consignation en mémoire.",
      "B. Lorsque le système a atteint sa capacité de stockage de messages de consignation, l'unité FortiGate remplace les messages les plus anciens.",
      "C. Si l'unité FortiGate est réinitialisée ou perd son alimentation, les entrées de journal capturées en mémoire sont perdues.",
      "D. Aucune de ces réponses."
    ],
    BR: [1, 2]
  },
  {
    Q: "Quels sont les moyens par lesquels FortiGate peut surveiller les journaux ? (Choisissez-en trois.)",
    R: [
      "A. MIB",
      "B. SMS",
      "C. Courriels d'alerte",
      "D. SNMP",
      "E. FortiAnalyzer",
      "F. Console de messages d'alerte"
    ],
    BR: [2, 3, 5]
  },
  {
    Q: "Parmi les propositions suivantes, laquelle n'est pas un type de traffic shaping disponible sur un FortiGate ?",
    R: [
      "Global shaper"
    ],
    BR: [0]
  },
  {
    Q: "Comment le trafic est-il acheminé sur un tunnel VPN SSL du côté de l'unité FortiGate ?",
    R: [
      "A. Une route statique doit être configurée par l'administrateur en utilisant l'interface racine sei. comme interface sortante.",
      "B. L'attribution d'une adresse IP au client entraîne l'ajout d'une route hôte à la table de routage du noyau de l'unité FortiGate.",
      "C. Une route de retour vers le pool IP SSLVPN est automatiquement créée sur l'unité FortiGate.",
      "D. L'unité FortiGate ajoute une route basée sur l'adresse de destination dans la politique de pare-feu SSL VPN."
    ],
    BR: [1]
  },
  {
    Q: "Lorsque le proxy SSL n'effectue PAS d'interception man-in-the-middle du trafic SSL, quel champ de certificat peut être utilisé pour déterminer le classement d'un site Web ?",
    R: [
      "A. Unité organisationnelle.",
      "B. Nom commun.",
      "C. Numéro de série.",
      "D. Validité."
    ],
    BR: [1]
  },
  {
    Q: "En ce qui concerne l'utilisation du VPN SSL en mode Web-only, quelle affirmation est correcte ?",
    R: [
      "A. Il prend en charge SSL version 3 uniquement.",
      "B. Il nécessite un plug-in fourni par Fortinet sur le client Web.",
      "C. L'utilisateur doit disposer d'un navigateur Web qui prend en charge la longueur de chiffrement de 64 bits.",
      "D. L'environnement d'exécution JAVA doit être installé sur le client."
    ],
    BR: [2]
  },
  {
    Q: "Lesquels des énoncés suivants sont vrais au sujet de l'inspection du contenu SSL Man-in-the-middle ? (Choisissez-en trois.)",
    R: [
      "A. Le dispositif FortiGate \"re-signe\" tous les certificats provenant des serveurs HTTPS.",
      "B. Le dispositif FortiGate fait office de sous-CA.",
      "C. Le certificat de service local du serveur Web doit être installé dans le dispositif FortiGate.",
      "D. Le dispositif FortiGate effectue une inspection man-in-the-middle.",
      "E. Le certificat SSL Proxy requis doit d'abord être demandé à une autorité de certification (CA) publique."
    ],
    BR: [1, 2, 4]
  },
  {
    Q: "Un utilisateur se connecte à un portail VPN SSL et active le mode tunnel. La pièce à conviction montre la politique de pare-feu et la configuration du portail VPN SSL de l'utilisateur. Quelle route statique est automatiquement ajoutée à la table de routage du client lorsque le mode tunnel est activé ?",
    R: [
      "A. Une route vers un sous-réseau de destination correspondant à l'objet d'adresse Internal_Servers.",
      "B. Une route vers le sous-réseau de destination configuré dans le widget du mode tunnel.",
      "C. Un itinéraire par défaut.",
      "D. Un itinéraire vers le sous-réseau de destination configuré dans les paramètres globaux du VPN SSL."
    ],
    BR: [0]
  },
  {
    Q: "Lesquels des agents FSSO suivants sont nécessaires pour une solution en mode agent DC ? (Choisissez-en 2)",
    R: [
      "A. Agent FSSO",
      "B. Agent DC",
      "C. Agent collecteur",
      "D. Serveur Radius"
    ],
    BR: [1, 2]
  },
  {
    Q: "Quelle est l'étape requise par un VPN SSL pour accéder à un serveur interne en utilisant le mode de transfert de port ?",
    R: [
      "A. Configurer les adresses IP virtuelles à attribuer aux utilisateurs du VPN SSL.",
      "B. Installer le client VPN SSL FortiClient",
      "C. Créer un royaume VPN SSL réservé aux clients utilisant le mode de transfert de port.",
      "D. Configurer l'application client pour transférer le trafic IP vers un proxy d'applets Java."
    ],
    BR: [3]
  },
  {
    Q: "Une entreprise doit fournir un accès VPN SSL à deux groupes d'utilisateurs. L'entreprise doit également afficher des messages de bienvenue différents sur l'écran de connexion VPN SSL pour les deux groupes d'utilisateurs. Qu'est-ce qui est nécessaire dans la configuration VPN SSL pour répondre à ces exigences ?",
    R: [
      "A. Deux VPN SSL séparés dans des interfaces différentes du même VDOM.",
      "B. Des royaumes VPN SSL différents pour chaque groupe",
      "C. Des adresses IP SSL VPN virtuelles différentes pour chaque groupe",
      "D. Deux politiques de pare-feu avec des portails captifs différents"
    ],
    BR: [1]
  },
  {
    Q: "Lorsqu'un utilisateur tente de se connecter à un site HTTPS, quel est le résultat attendu avec cette configuration ?",
    R: [
      "A. L'utilisateur doit s'authentifier avant d'accéder à des sites dont les certificats SSL ne sont pas fiables.",
      "B. L'utilisateur reçoit des avertissements relatifs aux certificats lorsqu'il se connecte à des sites dont les certificats SSL ne sont pas fiables.",
      "C. L'utilisateur est autorisé à accéder à tous les sites dotés de certificats SSL non fiables, sans avertissement de certificat.",
      "D. L'utilisateur est empêché de se connecter aux sites qui ont des certificats SSL non fiables (sans exception)."
    ],
    BR: [1]
  },
  {
    Q: "Un administrateur doit inspecter l'ensemble du trafic web (y compris le trafic web Internet) provenant d'utilisateurs se connectant à un VPN SSL. Comment cela peut-il être réalisé ?",
    R: [
      "A. En désactivant le tunnelage fractionné",
      "B. Configurer les signets Web",
      "C. Attribution d'adresses IP publiques aux clients VPN SSL",
      "D. Utiliser le mode Web uniquement"
    ],
    BR: [0]
  },
  {
    Q: "Comment un navigateur peut-il faire confiance à un certificat de serveur Web signé par une autorité de certification tierce ?",
    R: [
      "A. Le navigateur doit avoir installé le certificat de l'autorité de certification qui a signé le certificat du serveur Web.",
      "B. Le navigateur doit avoir installé le certificat du serveur Web.",
      "C. La clé privée du certificat de l'autorité de certification qui a signé le certificat du navigateur Web doit être installée sur le navigateur.",
      "D. La clé publique du certificat du serveur Web doit être installée sur le navigateur."
    ],
    BR: [0]
  },
  {
    Q: "Lors de la navigation vers un serveur Web interne à l'aide d'un signet VPN SSL en mode Web, quelle adresse IP est utilisée comme source de la requête HTTP ?",
    R: [
      "A. L'adresse IP publique de l'unité FortiGate",
      "B. L'adresse IP interne de l'unité FortiGate",
      "C. L'adresse IP virtuelle de l'utilisateur distant",
      "D. L'adresse IP publique de l'utilisateur distant"
    ],
    BR: [1]
  },
  {
    Q: "Quelle affirmation décrit le mieux ce qu'est SSL.root ?",
    R: [
      "A. Le nom de l'adaptateur réseau virtuel requis dans le PC de chaque utilisateur pour le mode Tunnel VPN SSL.",
      "B. Le nom d'une interface virtuelle dans le VDOM racine d'où provient tout le trafic utilisateur VPN SSL.",
      "C. Un objet Adresse du pare-feu qui contient les adresses IP attribuées aux utilisateurs VPN SSL.",
      "D. L'interface virtuelle du VDOM racine à laquelle les tunnels VPN SSL distants se connectent."
    ],
    BR: [1]
  },
  {
    Q: "Un FortiGate est configuré avec l'adresse 1.1.1.1/24 sur l'interface wan2 et l'accès administratif HTTPS est activé pour l'interface. L'accès administratif HTTPS, utilisant le port tcp par défaut, est activé pour cette interface. Compte tenu des paramètres VPN SSL de la pièce à conviction. Lesquelles des URLs de portail de connexion VPN SSL suivantes sont valides ? (Choisissez-en deux.)",
    R: [
      "A. http://1.1.1.1:443/Training",
      "B. https://1.1.1.1:443/STUDENTS",
      "C. https://1.1.1.1/login",
      "D. https://1.1.1.1/"
    ],
    BR: [1, 3]
  },
  {
    Q: "Lesquelles des affirmations suivantes sont correctes concernant le mode Web-only du VPN SSL ? (Choisissez-en deux.)",
    R: [
      "A. Il ne peut être utilisé que pour se connecter à des services Web.",
      "B. Le trafic IP est encapsulé sur HTTPS.",
      "C. L'accès aux ressources du réseau interne est possible à partir du portail VPN SSL.",
      "D. Le client VPN SSL autonome FortiClient NE PEUT PAS être utilisé pour établir un VPN SSL uniquement sur le Web.",
      "E. Il n'est pas possible de se connecter à des serveurs SSH via le VPN."
    ],
    BR: [2, 3]
  },
  {
    Q: "Laquelle des méthodes d'authentification suivantes peut être utilisée pour l'authentification VPN SSL ? (Choisissez-en trois.)",
    R: [
      "A. Authentification par mot de passe à distance (RADIUS, LDAP)",
      "B. Authentification à deux facteurs",
      "C. Authentification par mot de passe local",
      "D. FSSO",
      "E. RSSO"
    ],
    BR: [0, 1, 3]
  },
  {
    Q: "Quelle affirmation décrit le mieux ce que fait la vérification d'intégrité du client VPN SSL ?",
    R: [
      "A. Bloque les tentatives de connexion VPN SSL des utilisateurs qui ont été mis sur liste noire.",
      "B. Détecte les applications de sécurité du client Windows exécutées sur les PC du client VPN SSL.",
      "C. Valide l'identifiant de l'utilisateur VPN SSL.",
      "D. Vérifie quel portail VPN SSL doit être présenté à chaque utilisateur VPN SSL.",
      "E. Vérifie que le dernier client VPN SSL est installé sur le PC du client."
    ],
    BR: [1]
  },
  {
    Q: "Quelle affirmation est incorrecte concernant le mode Tunnel VPN SSL ?",
    R: [
      "A. Le trafic IP est encapsulé sur HTTPS.",
      "B. Le client VPN SSL autonome FortiClient peut être utilisé pour établir un VPN SSL en mode Tunnel.",
      "C. Un nombre limité d'applications IP est pris en charge.",
      "D. Le dispositif FortiGate attribue dynamiquement une adresse IP à la carte réseau VPN SSL."
    ],
    BR: [2]
  },
  {
    Q: "Lesquels des énoncés suivants décrivent certaines des différences entre la cryptographie symétrique et asymétrique ? (Choisissez-en deux.)",
    R: [
      "A. Dans la cryptographie symétrique, les clés sont accessibles au public. Dans la cryptographie asymétrique, les clés sont accessibles au public.",
      "B. La cryptographie asymétrique permet de chiffrer les données plus rapidement que la cryptographie symétrique.",
      "C. La cryptographie symétrique utilise une clé pré-partagée. La cryptographie asymétrique utilise une paire de clés.",
      "D. Les clés asymétriques peuvent être envoyées à l'homologue distant via des certificats numériques. Les clés symétriques ne peuvent pas."
    ],
    BR: [2, 3]
  },
  {
    Q: "Parmi les affirmations suivantes, laquelle décrit le mieux ce qu'est une autorité de publique (CA) ?",
    R: [
      "A. Un service qui fournit un certificat numérique à chaque fois qu'un utilisateur s'authentifie",
      "B. Une entité qui certifie que les informations contenues dans un certificat numérique sont valides et vraies.",
      "C. Le processus FortiGate chargé de générer des certificats numériques à la volée à des fins d'inspection SSL.",
      "D. Un service qui valide les certificats numériques à des fins d'authentification basée sur des certificats."
    ],
    BR: [3]
  },
  {
    Q: "Lesquels des énoncés suivants sont vrais à propos du certificat SSL Proxy ? (Choisissez-en deux.)",
    R: [
      "A. Il ne peut pas être signé par une AC privée doit être utilisé pour l'inspection du contenu SSL.",
      "B. Il doit avoir soit le champ \"CA=True\", soit le champ \"Key Usage=KeyCertSign\".",
      "C. Il doit être installé dans le dispositif FortiGate.",
      "D. L'objet déposé doit contenir soit le FQDN, soit l'adresse IP du dispositif FortiGate."
    ],
    BR: [1, 2]
  },
  {
    Q: "Lesquels des énoncés suivants sont vrais au sujet des utilisateurs d'ICP créés dans un dispositif FortiGate ? (Choisissez-en deux.)",
    R: [
      "A. Ils peuvent être utilisés pour l'authentification par jeton",
      "B. Peut être utilisé pour l'authentification à deux facteurs",
      "C. Sont utilisés pour l'authentification par certificat",
      "D. Ne peuvent pas être membres de groupes d'utilisateurs"
    ],
    BR: [0, 1]
  },
  {
    Q: "Lequel des énoncés suivants décrit le mieux ce qu'est une demande de signature de certificat (CSR) ?",
    R: [
      "A. Un message envoyé par l'autorité de certification (CA) qui contient un certificat numérique signé.",
      "B. Une demande soumise à une autorité de certification (CA) pour demander un certificat CA.",
      "C. Une demande soumise à une autorité de certification (CA) pour demander un certificat numérique signé.",
      "D. Une demande soumise à une autorité de certification (CA) pour demander une liste de révocation de certificat (CRL)."
    ],
    BR: [1]
  },
  {
    Q: "Laquelle des actions suivantes peut être utilisée pour sauvegarder les clés et les certificats numériques d'un dispositif FortiGate ? (Choisissez-en deux.)",
    R: [
      "A. Effectuer une sauvegarde complète de la configuration de FortiGate.",
      "B. Téléchargement d'un fichier PKCS#10 sur un lecteur USB",
      "C. Téléchargement manuel des informations de certificat vers une autorité de certification (CA)",
      "D. Télécharger un fichier PCS#12 vers un serveur TFTP"
    ],
    BR: [0, 3]
  },
  {
    Q: "Lequel des énoncés suivants doit être vrai pour qu'un certificat numérique soit valide ? (Choisissez-en deux.)",
    R: [
      "A. Il doit être signé par une autorité de certification \"fiable\".",
      "B. Il doit être répertorié comme valide dans une liste de révocation de certificats (CRL).",
      "C. Le champ CA doit être \"TRUE\".",
      "D. Il doit être encore dans sa période de validité"
    ],
    BR: [0, 3]
  },
  {
    Q: "Quelle est l'affirmation vraie concernant les temporisateurs VPN SSL ? (Choisissez-en deux.)",
    R: [
      "A. Permettent d'atténuer les attaques DoS provenant de requêtes HTTP partielles.",
      "B. Les paramètres VPN SSL ne comportent pas de temporisateurs personnalisables.",
      "C. Déconnecter les utilisateurs VPN SSL inactifs lorsqu'un délai d'authentification de la politique de pare-feu se produit.",
      "D. Empêcher les utilisateurs VPN SSL d'être déconnectés en raison d'une forte latence du réseau."
    ],
    BR: [0, 3]
  },
  {
    Q: "Laquelle des conditions suivantes doit être remplie pour qu'un navigateur Web fasse confiance à un certificat de serveur Web signé par une AC tierce ?",
    R: [
      "A. La clé publique du certificat de serveur Web doit être installée sur le navigateur.",
      "B. Le certificat du serveur Web doit être installé sur le navigateur.",
      "C. Le certificat de l'autorité de certification qui a signé le certificat du serveur Web doit être installé sur le navigateur.",
      "D. La clé privée du certificat de l'autorité de certification qui a signé le certificat du navigateur doit être installée sur le navigateur."
    ],
    BR: [3]
  },
  {
    Q: "L'épinglage de la clé publique HTTP (HPKP) peut constituer un obstacle à la mise en œuvre d'une inspection complète de la sst. Quelles solutions pourraient résoudre ce problème ? (Choisissez-en deux.)",
    R: [
      "A. Activer l'option Autoriser les certificats SSL non valides pour le profil de sécurité concerné.",
      "B. Modifier les navigateurs Web pour en choisir un qui ne prend pas en charge HPKP.",
      "C. Exempter les sites Web qui utilisent HPKP de l'inspection SSL complète.",
      "D. Installer le certificat de l'autorité de certification (requis pour vérifier le certificat du serveur Web) dans les magasins des utilisateurs."
    ],
    BR: [1, 2]
  },
  {
    Q: "Lequel des énoncés suivants est vrai concernant les paramètres SSL VPN pour un portail VPN SSL ?",
    R: [
      "A. Par défaut, FortiGate utilise des serveurs WINS pour résoudre les noms.",
      "B. Par défaut, le portail VPN SSL nécessite l'installation du certificat d'un client.",
      "C. Par défaut, le tunnelage fractionné est activé.",
      "D. Par défaut, l'interface graphique d'administration et le portail VPN SSL utilisent le même port HTTPS."
    ],
    BR: [3]
  },
  {
    Q: "Quelle est la description correcte d'un résultat de hachage en ce qui concerne les certificats numériques ?",
    R: [
      "A. Une valeur unique utilisée pour vérifier les données d'entrée",
      "B. Une valeur de sortie qui est utilisée pour identifier la personne ou déduire qui a rédigé les données d'entrée.",
      "C. Une obfuscation utilisée pour masquer les données d'entrée.",
      "D. Une valeur de sortie chiffrée utilisée pour protéger les données d'entrée."
    ],
    BR: [0]
  },
  {
    Q: "Un administrateur doit créer une connexion SSL-VPN pour accéder à un serveur interne en utilisant le signet Port Forward. Quelle étape est nécessaire pour cette configuration ?",
    R: [
      "A. Configurer un royaume VPN SSL pour que les clients utilisent le signet Port Forward.",
      "B. Configurer l'application client pour transférer le trafic IP via FortiClient.",
      "C. Configurez l'adresse IP virtuelle à attribuer aux utilisateurs VPN SSL.",
      "D. Configurez l'application client pour qu'elle transfère le trafic IP vers un proxy d'applets Java."
    ],
    BR: [3]
  },
  {
    Q: "Quels utilisateurs et groupes d'utilisateurs sont autorisés à accéder au réseau via le portail captif ?",
    R: [
      "A. Seuls les utilisateurs individuels, et non les groupes, définis dans la configuration du portail captif.",
      "B. Les groupes définis dans la configuration du portail captif",
      "C. Tous les utilisateurs",
      "D. Utilisateurs et groupes définis dans la politique de pare-feu"
    ],
    BR: [3]
  },
  {
    Q: "Quelles sont les deux affirmations vraies concernant les VPN IPsec et les VPN SSL ? (Choisissez-en deux.)",
    R: [
      "A. Le VPN SSL crée une connexion HTTPS. IPsec ne le fait pas.",
      "B. Les VPN SSL et les VPN IPsec sont tous deux des protocoles standard.",
      "C. Un VPN SSL ou un VPN IPsec peut être établi entre deux dispositifs FortiGate.",
      "D. Un VPN SSL ou un VPN IPsec peut être établi entre une station de travail d'utilisateur final et un dispositif FortiGate."
    ],
    BR: [0, 3]
  },
  {
    Q: "Concernant le VPN SSL en mode tunnel, quelles sont les trois affirmations correctes ? (Choisissez-en trois.)",
    R: [
      "A. Le tunnelage fractionné est pris en charge",
      "B. Il nécessite l'installation d'un client VPN.",
      "C. Il nécessite l'utilisation d'un navigateur Internet.",
      "D. Il ne prend pas en charge le trafic provenant d'applications réseau tierces.",
      "E. Une adresse IP VPN SSL est attribuée dynamiquement au client par l'unité FortiGate."
    ],
    BR: [0, 1, 4]
  },
  {
    Q: "Quelles tâches relèvent de la responsabilité du proxy SSL dans une connexion HTTPS typique ? (Choisissez-en deux.",
    R: [
      "A. La poignée de main SSL du client Web.",
      "B. La poignée de main SSL du serveur Web.",
      "C. La mise en mémoire tampon des fichiers.",
      "D. La communication avec le processus de filtrage des URL."
    ],
    BR: [0, 1]
  },
  {
    Q: "Un client peut créer une connexion sécurisée à un dispositif FortiGate en utilisant le VPN SSL en mode web uniquement. Lequel des énoncés suivants est correct concernant l'utilisation du VPN SSL en mode Web-only ?",
    R: [
      "A. Le mode Web-only prend en charge SSL version 3 uniquement.",
      "B. Un plug-in fourni par Fortinet est nécessaire sur le client Web pour utiliser le mode SSL VPN Web-only.",
      "C. Le mode Web-only nécessite que l'utilisateur dispose d'un navigateur Web qui prend en charge la longueur de chiffrement de 64 bits.",
      "D. L'environnement d'exécution JAVA doit être installé sur le client pour pouvoir se connecter à un VPN SSL en mode Web uniquement."
    ],
    BR: [2]
  },
  {
    Q: "Un client peut établir une connexion sécurisée à un réseau d'entreprise en utilisant le VPN SSL en mode tunnel. Lesquelles des affirmations suivantes sont correctes concernant l'utilisation du VPN SSL en mode tunnel ? (Sélectionnez toutes les réponses applicables.)",
    R: [
      "A. La tunnelisation fractionnée peut être activée lors de l'utilisation du VPN SSL en mode tunnel.",
      "B. Un logiciel client est nécessaire pour pouvoir utiliser un VPN SSL en mode tunnel.",
      "C. Les utilisateurs qui tentent de créer une connexion VPN SSL en mode tunnel doivent être authentifiés par au moins une politique VPN SSL.",
      "D. L'adresse IP source utilisée par le client pour le VPN SSL en mode tunnel est attribuée par l'unité FortiGate."
    ],
    BR: [0, 1, 2, 3]
  },
  {
    Q: "Un problème pourrait potentiellement se produire lorsque l'on clique sur Connecter pour démarrer le mode tunnel VPN SSL. Le tunnel démarre pendant quelques secondes, puis s'arrête. Lequel des énoncés suivants décrit le mieux la façon de résoudre ce problème ?",
    R: [
      "A. Cet utilisateur n'a pas la permission d'activer le mode tunnel. Assurez-vous que le widget du mode tunnel a été ajouté au portail Web de cet utilisateur.",
      "B. Cette unité FortiGate peut disposer de plusieurs connexions Internet. Pour éviter ce problème, utilisez la commande CLI appropriée pour lier la connexion VPN SSL à l'interface entrante d'origine.",
      "C. Vérifiez l'adaptateur SSL sur la machine hôte. Si nécessaire, désinstallez et réinstallez l'adaptateur à partir du portail en mode tunnel.",
      "D. Assurez-vous que seul Internet Explorer est utilisé. Tous les autres navigateurs ne sont pas pris en charge."
    ],
    BR: [1]
  },
  {
    Q: "Une unité FortiGate peut créer une connexion sécurisée à un client utilisant SSL VPN en mode tunnel. Lesquelles des affirmations suivantes sont correctes concernant l'utilisation du VPN SSL en mode tunnel ? (Sélectionnez toutes les réponses applicables.)",
    R: [
      "A. La tunnelisation fractionnée peut être activée lors de l'utilisation du mode tunnel SSL VPN.",
      "B. Un logiciel doit être téléchargé sur le client Web pour pouvoir utiliser un VPN SSL en mode tunnel.",
      "C. Les utilisateurs qui tentent de créer une connexion VPN SSL en mode tunnel doivent être membres d'un groupe d'utilisateurs configuré sur l'unité FortiGate.",
      "D. Le VPN SSL en mode tunnel nécessite que le logiciel FortiClient soit installé sur l'ordinateur de l'utilisateur.",
      "E. L'adresse IP source utilisée par le client pour le VPN SSL en mode tunnel est attribuée par l'unité FortiGate."
    ],
    BR: [0, 1, 2, 3, 4]
  },
  {
    Q: "L'utilisateur final de l'air se connecte au portail VPN SSL et sélectionne l'option Mode Tunnel en cliquant sur le bouton \"Connect\". L'administrateur n'a pas activé le spit tunneling et donc l'utilisateur final doit accéder au réseau via le tunnel VPN SSL. Quelles politiques de pare-feu sont nécessaires pour permettre à l'utilisateur final d'accéder non seulement au réseau interne mais aussi à l'Internet ?",
    R: [
      "A. (voir photo)",
      "B. (voir photo)",
      "C. (voir photo)",
      "D. (voir photo)"
    ],
    BR: [0]
  },
  {
    Q: "L'inspection du contenu SSL est activée sur l'unité FortiGate. Laquelle des étapes suivantes est nécessaire pour empêcher un utilisateur de recevoir un avertissement du navigateur Web lorsqu'il accède à un site Web crypté par SSL ?",
    R: [
      "A. Le certificat racine du proxy SSL de FortiGate doit être importé dans le magasin de certificats local sur le poste de travail de l'utilisateur.",
      "B. Désactivez la vérification stricte du certificat de serveur dans le navigateur Web sous Options Internet.",
      "C. Activez le mode proxy transparent sur l'unité FortiGate.",
      "D. Activez l'authentification NTLM sur l'unité FortiGate. L'authentification NTL_M supprime les messages d'avertissement du certificat dans le navigateur Web."
    ],
    BR: [0]
  },
  {
    Q: "Examinez l'illustration ci-dessous et répondez à la question qui suit. Dans les options UTM Proxy, le certificat CA Fortinet_CA_SSLProxy définit lequel des éléments suivants :",
    R: [
      "A. Le certificat de cryptage de l'unité FortiGate utilisé par le proxy SSL.",
      "B. Le certificat de signature de l'unité FortiGate utilisé par le proxy SSL.",
      "C. Le certificat de signature de FortiGuard utilisé par le proxy SSL.",
      "D. Le certificat de cryptage de FortiGuard utilisé par le proxy SSL."
    ],
    BR: [1]
  },
  {
    Q: "Lesquels des énoncés suivants sont corrects en ce qui concerne la configuration d'une unité FortiGate en tant que passerelle VPN SSL ? (Sélectionnez tous ceux qui s'appliquent.)",
    R: [
      "A. Le mode tunnel ne peut être utilisé que si les groupes d'utilisateurs VPN SSL ont au moins une option de contrôle des hôtes activée.",
      "B. Les routes spécifiques nécessaires pour accéder aux ressources internes via une connexion VPN SSL en mode tunnel à partir de l'ordinateur client sont définies dans le widget de routage associé au portail VPN SSL.",
      "C. Pour appliquer un portail à un utilisateur, ce dernier doit appartenir à un groupe d'utilisateurs VPN SSL.",
      "D. Les paramètres du portail spécifient si la connexion fonctionnera en mode Web uniquement ou en mode tunnel."
    ],
    BR: [2, 3]
  },
  
  {
    Q: "Lorsque le proxy SSL inspecte le certificat du serveur pour le filtrage Web uniquement en mode SSL Handshake, quel champ de certificat est utilisé pour déterminer le classement du site ?",
    R: [
      "A. Nom commun",
      "B. Organisation",
      "C. Unité organisationnelle",
      "D. Numéro de série",
      "E. Validité"
    ],
    BR: [0]
  },
  {
    Q: "Dans le widget Tunnel Mode du portail Web, l'administrateur a configuré un pool IP et a activé le tunnelage fractionné. Lequel des énoncés suivants est vrai concernant l'adresse IP utilisée par le client VPN SSL ?",
    R: [
      "A. Le pool IP spécifié dans les options du widget Mode tunnel SSL-VPN remplacera la plage d'adresses IP définie dans les paramètres SSL-VPN.",
      "B. Le tunnelage fractionné étant activé, aucune adresse IP ne doit être attribuée pour que le tunnel VPN SSL soit établi.",
      "C. La plage d'adresses IP spécifiée dans les Paramètres SSL-VPN remplacera la plage d'adresses IP dans les Options du Widget Mode Tunnel SSL-VPN."
    ],
    BR: [0]
  },
  {
    Q: "La fonction de vérification de l'hôte peut être activée sur l'unité FortiGate pour les connexions VPN SSL. Lorsque cette fonction est activée, l'unité FortiGate sonde l'ordinateur hôte distant pour vérifier qu'il est \"sûr\" avant d'accorder l'accès. Lequel des éléments suivants n'est PAS une option de la fonction de vérification de l'hôte ?",
    R: [
      "A. Le logiciel antivirus FortiClient",
      "B. Le logiciel de pare-feu Microsoft Windows",
      "C. Le logiciel de pare-feu FortiClient",
      "D. Logiciel antivirus tiers"
    ],
    BR: [1]
  },
  {
    Q: "Qu'est-ce qui est nécessaire dans une configuration FortiGate pour avoir plusieurs VPN IPsec utilisant le mode agressif ?",
    R: [
      "A. Tous les VPN dialup en mode agressif DOIVENT accepter les connexions provenant du même ID de pair.",
      "B. Chaque ID d'homologue DOIT correspondre au FQDN de chaque homologue distant.",
      "C. Chaque VPN commuté en mode agressif DOIT accepter les connexions provenant d'ID d'homologues différents.",
      "D. Le paramètre peer ID ne doit PAS être utilisé."
    ],
    BR: [2]
  },
  {
    Q: "Un utilisateur final se connecte au portail VPN SSL à accès complet et sélectionne l'option Tunnel Mode en cliquant sur le bouton \"Connect\". L'administrateur a activé le tunnelage fractionné. Étant donné que l'utilisateur s'authentifie par rapport à la politique VPN SSL présentée dans l'image ci-dessous, quelle affirmation ci-dessous identifie la route qui est ajoutée à la table de routage du client ?",
    R: [
      "A. Une route vers la destination correspondant à l'objet adresse 'WIN2K3'.",
      "B. Une route vers la destination correspondant à l'objet d'adresse 'all'.",
      "C. Une route par défaut.",
      "D. Aucune route n'est ajoutée."
    ],
    BR: [0]
  },
  {
    Q: "Avec le mode agent DC de FSSO, un utilisateur de domaine peut s'authentifier soit auprès du contrôleur de domaine exécutant l'agent collecteur et l'agent contrôleur de domaine, soit auprès d'un contrôleur de domaine exécutant uniquement l'agent contrôleur de domaine. Si vous tentez de vous authentifier auprès d'un contrôleur de domaine exécutant uniquement l'agent de contrôleur de domaine, quelles sont les affirmations correctes ? (Choisissez-en deux.)",
    R: [
      "A. L'événement de connexion est envoyé à un agent collecteur par l'agent DC.",
      "B. L'événement de connexion est envoyé à la FortiGate par l'agent DC.",
      "C. L'agent collecteur de domaine peut effectuer une recherche DNS pour l'adresse IP du client authentifié.",
      "D. L'utilisateur ne peut pas être authentifié auprès du FortiGate de cette manière car chaque agent de contrôleur de domaine nécessite un agent collecteur dédié."
    ],
    BR: [2, 3]
  },
  {
    Q: "Quelle affirmation décrit l'utilité de la commande CLI diagnose debug authd fsso list ?",
    R: [
      "A. Surveille les communications entre l'agent collecteur FSSO et l'unité FortiGate.",
      "B. Affiche les utilisateurs actuellement connectés à l'aide de FSSO.",
      "C. Affiche la liste de tous les agents collecteurs FSSO connectés.",
      "D. Affiche la liste de tous les agents DC installés sur tous les contrôleurs de domaine."
    ],
    BR: [1]
  },
  {
    Q: "Quel énoncé décrit le mieux ce qu'est SSL.root ?",
    R: [
      "A. Le nom de l'adaptateur réseau virtuel requis dans le PC de chaque utilisateur pour le mode Tunnel VPN SSL.",
      "B. Le nom d'une interface virtuelle dans le VDOM racine d'où provient tout le trafic utilisateur VPN SSL.",
      "C. Un objet Adresse du pare-feu qui contient les adresses IP attribuées aux utilisateurs VPN SSL.",
      "D. L'interface virtuelle du VDOM racine à laquelle les tunnels VPN SSL distants se connectent."
    ],
    BR: [1]
  },
  {
    Q: "Un FortiGate est configuré avec l'adresse 1.1.1.1/24 sur l'interface wan2 et l'accès administratif HTTPS utilisant le port supérieur par défaut est activé pour cette interface. Compte tenu des paramètres VPN SSL de la pièce à conviction. Lesquelles des URLs de portail de connexion VPN SSL suivantes sont valides ? (Choisissez-en deux.)",
    R: [
      "A. http://1.1.1.1:443/Training",
      "B. https://1.1.1.1:443/STUDENTS",
      "C. https://1.1.1.1/login",
      "D. https://1.1.1.1/"
    ],
    BR: [1, 3]
  },
  {
    Q: "Quel énoncé décrit le mieux la fonction de vérification d'intégrité du client VPN SSL ?",
    R: [
      "A. Bloque les tentatives de connexion VPN SSL des utilisateurs figurant sur la liste noire.",
      "B. Détecte les applications de sécurité du client Windows exécutées sur les PC du client VPN SSL.",
      "C. Valide l'identifiant de l'utilisateur VPN SSL.",
      "D. Vérifie quel portail VPN SSL doit être présenté à chaque utilisateur VPN SSL.",
      "E. Vérifie que le dernier client VPN SSL est installé sur le PC du client."
    ],
    BR: [1]
  },
  {
    Q: "Quels sont les avantages du mode FSSO DC par rapport au mode polling ?",
    R: [
      "A. Redondance de l'agent collecteur.",
      "B. Permet une authentification transparente.",
      "C. Les agents DC ne sont pas nécessaires dans les contrôleurs de domaine AD.",
      "D. Évolutivité"
    ],
    BR: [3]
  },
  {
    Q: "Lesquelles des affirmations suivantes concernant l'authentification NTLM sont correctes ? (Choisissez-en trois)",
    R: [
      "A. La négociation NTLM commence entre le dispositif FortiGate et le navigateur de l'utilisateur.",
      "B. Elle doit être prise en charge par le navigateur de l'utilisateur.",
      "C. Elle doit être prise en charge par les contrôleurs de domaine.",
      "D. Elle ne nécessite pas d'agent collecteur.",
      "E. Il ne nécessite pas d'agents DC."
    ],
    BR: [0, 1, 2]
  },
  {
    Q: "Lequel des énoncés suivants décrit le mieux comment l'agent collecteur apprend qu'un utilisateur s'est déconnecté du réseau ?",
    R: [
      "A. La station de travail ne répond pas aux sondages fréquemment effectués par l'agent collecteur.",
      "B. L'agent DC capture l'événement de déconnexion dans les journaux d'événements, qu'il transmet à l'agent collecteur.",
      "C. Le poste de travail notifie à l'agent DC que l'utilisateur s'est déconnecté.",
      "D. L'agent collecteur reçoit les événements de déconnexion lorsqu'il interroge le contrôleur de domaine correspondant."
    ],
    BR: [0]
  },
  {
    Q: "Laquelle des affirmations suivantes décrit le mieux le rôle d'un agent DC dans un DC FSSO ?",
    R: [
      "A. Capture les événements de connexion et les transmet à l'agent collecteur.",
      "B. Capture l'adresse IP et le nom du poste de travail de l'utilisateur et transmet ces informations aux dispositifs FortiGate.",
      "C. Capture les événements de connexion et de déconnexion et les transmet à l'agent collecteur.",
      "D. Capture les événements de connexion et les transmet aux dispositifs FortiGate."
    ],
    BR: [0]
  },
  {
    Q: "Lequel des modes FSSO suivants doit être utilisé pour les réseaux Novell Directory ?",
    R: [
      "A. Polling sans agent",
      "B. Agent LDAP",
      "C. Agent d'annuaire",
      "D. Agent DC"
    ],
    BR: [2]
  },
  {
    Q: "Dans une solution FSSO en mode interrogation sans agent, où doit se trouver l'agent collecteur ?",
    R: [
      "A. Dans n'importe quel serveur Windows",
      "B. Dans l'un des contrôleurs de domaine AD",
      "C. Dans le contrôleur de domaine AD maître",
      "D. Le dispositif FortiGate interroge les contrôleurs de domaine AD."
    ],
    BR: [3]
  },
  {
    Q: "Lesquels des énoncés suivants sont des caractéristiques d'une solution FSSO utilisant le mode d'accès avancé ? (Choisissez-en trois.)",
    R: [
      "A. Les profils de protection peuvent être appliqués à la fois aux utilisateurs individuels et aux groupes d'utilisateurs.",
      "B. Les groupes imbriqués ou hérités sont pris en charge",
      "C. Les noms d'utilisateur suivent la convention LDAP : CN=User, OU=Nom, DC=Domaine",
      "D. Les noms d'utilisateur suivent la convention Windows : Domaine - nom d'utilisateur",
      "E. Les profils de protection ne peuvent être appliqués qu'à des groupes d'utilisateurs."
    ],
    BR: [1, 2, 4]
  },
  {
    Q: "Lesquels des agents FSSO suivants sont nécessaires pour une solution en mode agent DC ? (Choisissez-en deux.)",
    R: [
      "A. Agent FSSO",
      "B. Agent DC",
      "C. Agent collecteur",
      "D. Serveur Radius"
    ],
    BR: [1, 2]
  },
  {
    Q: "Dans une solution en mode agent de FSSO, comment l'agent collecteur de FSSO apprend-il chaque adresse IP ?",
    R: [
      "A. Les agents DC obtiennent chaque adresse IP d'utilisateur à partir des journaux d'événements et transmettent ces informations à l'agent collecteur.",
      "B. L'agent collecteur ne connaît pas, et n'a pas besoin de connaître, l'adresse IP de chaque utilisateur. Seuls les noms des postes de travail sont connus de l'agent collecteur.",
      "C. L'agent collecteur interroge fréquemment les contrôleurs de domaine AD pour obtenir l'adresse IP de chaque utilisateur.",
      "D. L'agent DC apprend le nom de la station de travail à partir des journaux d'événements et le DNS est ensuite utilisé pour traduire ces noms en adresses IP respectives."
    ],
    BR: [3]
  },
  {
    Q: "Quels agents FSSO sont nécessaires pour une solution de mode d'interrogation basée sur des agents FSSO ?",
    R: [
      "A. Agent collecteur et agents DC",
      "B. Agent d'interrogation uniquement",
      "C. Agent collecteur uniquement",
      "D. Agents DC uniquement"
    ],
    BR: [2]
  },
  {
    Q: "Quel protocole ne peut pas être utilisé avec le type d'authentification active ?",
    R: [
      "A. Local",
      "B. RADIUS",
      "C. LDAP",
      "D. RSSO"
    ],
    BR: [1]
  },
  {
    Q: "Lesquels des énoncés suivants concernant l'authentification NTLM sont corrects ? (Choisissez-en deux.)",
    R: [
      "A. Elle est utile lorsque les utilisateurs se connectent à des DC qui ne sont pas surveillés par un agent collecteur.",
      "B. Elle prend la place de la méthode d'authentification principale lorsqu'elle est configurée avec FSSO.",
      "C. Les environnements multi-domaines nécessitent des agents DC sur chaque contrôleur de domaine.",
      "D. Les navigateurs Web compatibles avec NTLM sont nécessaires."
    ],
    BR: [0, 3]
  },
  {
    Q: "Comment FortiGate vérifie-t-il les informations d'identification d'un utilisateur LDAP distant ?",
    R: [
      "A. FortiGate envoie les informations d'identification saisies par l'utilisateur au serveur LDAP pour authentification.",
      "B. FortiGate génère à nouveau l'algorithme en fonction des informations d'identification de connexion et le compare à l'algorithme stocké sur le serveur LDAP.",
      "C. FortiGate interroge sa propre base de données pour obtenir des informations d'identification.",
      "D. FortiGate recherche les informations d'identification sur le serveur LDAP."
    ],
    BR: [0]
  },
  {
    Q: "Lesquelles des affirmations suivantes concernant le mode d'accès AD avancé pour l'agent collecteur FSSO sont vraies ? (Choisissez-en deux.)",
    R: [
      "A. Il n'est pris en charge que si des agents DC sont déployés.",
      "B. FortiGate peut agir comme un client LDAP pour configurer les filtres de groupe.",
      "C. Il prend en charge la surveillance des groupes imbriqués.",
      "D. Elle utilise la convention Windows pour l'attribution de noms, c'est-à-dire Domain\\Username."
    ],
    BR: [1, 3]
  },
  {
    Q: "Lesquels des énoncés suivants décrivent le mode d'interrogation WMI pour l'agent collecteur FSSO ? (Choisissez-en deux.)",
    R: [
      "A. L'agent collecteur n'a pas besoin de rechercher les journaux d'événements de sécurité.",
      "B. L'interrogation WMI peut augmenter l'utilisation de la bande passante sur les grands réseaux.",
      "C. La fonction NetSessionEnum est utilisée pour suivre les déconnexions des utilisateurs.",
      "D. L'agent collecteur utilise une API Windows pour interroger les DC sur les connexions des utilisateurs."
    ],
    BR: [2, 3]
  },
  {
    Q: "Quel schéma d'authentification n'est pas pris en charge par l'implémentation RADIUS sur le FortiGate ?",
    R: [
      "A. CHAP",
      "B. MSCHAP2",
      "C. PAP",
      "D. FSSO"
    ],
    BR: [3]
  },
  {
    Q: "FSSO est une solution d'authentification unique permettant d'authentifier les utilisateurs de manière transparente sur une unité FortiGate à l'aide des informations d'identification stockées dans le répertoire actif de Windows. Lesquels des énoncés suivants sont corrects concernant FSSO dans un environnement de domaine Windows lorsque le mode DC-agent est utilisé ? (Choisissez-en deux.)",
    R: [
      "A. Un agent collecteur FSSO doit être installé sur chaque contrôleur de domaine.",
      "B. Un agent contrôleur de domaine FSSO doit être installé sur chaque contrôleur de domaine.",
      "C. L'agent contrôleur de domaine FSSO met régulièrement à jour les informations de connexion des utilisateurs sur l'unité FortiGate sur l'unité FortiGate.",
      "D. L'agent collecteur FSSO reçoit les informations de connexion des utilisateurs de l'agent du contrôleur de domaine et les envoie à l'unité FortiGate."
    ],
    BR: [1, 3]
  },
  {
    Q: "Quelle est la meilleure description du délai d'authentification ?",
    R: [
      "A. La durée pendant laquelle FortiGate attend que l'utilisateur saisisse ses informations d'identification.",
      "B. La durée pendant laquelle un utilisateur est autorisé à envoyer et à recevoir du trafic avant de devoir s'authentifier à nouveau.",
      "C. La durée pendant laquelle un utilisateur authentifié peut rester inactif (sans envoyer de trafic) avant de devoir s'authentifier à nouveau.",
      "D. Combien de temps une session authentifiée par un utilisateur peut exister sans devoir s'authentifier à nouveau."
    ],
    BR: [2]
  },
  {
    Q: "Quelles sont les réponses valides d'un serveur RADIUS à un paquet ACCESS-REQUEST provenant d'une FortiGate ? (Choisissez-en deux.)",
    R: [
      "A. ACCESS-CHALLENGE",
      "B. ACCESS-RESTRICT",
      "C. ACCÈS EN ATTENTE",
      "D. ACCESS-REJECT"
    ],
    BR: [0, 3]
  },
  {
    Q: "Quel protocole ne peut pas être utilisé avec le type d'authentification active ?",
    R: [
      "A. Local",
      "B. RADIUS",
      "C. LDAP",
      "D. RSSO"
    ],
    BR: [3]
  },
  {
    Q: "Lors de la configuration de LDAP sur le FortiGate comme base de données distante pour les utilisateurs, qu'est-ce qui ne fait pas partie de la configuration ?",
    R: [
      "A. Le nom de l'attribut qui identifie chaque utilisateur (Common Name Identifier).",
      "B. Les noms des éléments du compte utilisateur ou du groupe (DN utilisateur).",
      "C. Le secret du serveur pour permettre les requêtes à distance (secret du serveur primaire).",
      "D. Les informations d'identification d'un administrateur LDAP (mot de passe)."
    ],
    BR: [2]
  },
  {
    Q: "Quelles méthodes d'authentification FortiGate prend-il en charge pour l'authentification du pare-feu ? (Choisissez-en deux.)",
    R: [
      "A. Service d'authentification à distance des utilisateurs (RADIUS)",
      "B. Protocole d'accès aux annuaires légers (LDAP)",
      "C. Authentification par mot de passe local",
      "D. POP3",
      "E. Authentification par mot de passe à distance"
    ],
    BR: [0, 2]
  },
  {
    Q: "Quelles méthodes FortiGate peut-il utiliser pour envoyer un mot de passe à usage unique (OTP) aux utilisateurs de l'authentification à deux facteurs ? (Choisissez-en trois.)",
    R: [
      "A. FortiToken matériel",
      "B. Portail Web",
      "C. Courriel",
      "D. Token USB",
      "E. Logiciel FortiToken"
    ],
    BR: [0, 2, 4]
  },
  {
    Q: "Quels types de groupes d'utilisateurs FortiGate prend-il en charge pour l'authentification du pare-feu ? (Choisissez-en trois.)",
    R: [
      "A. RSSO",
      "B. Pare-feu",
      "C. LDAP",
      "D. NTLM",
      "E. FSSO"
    ],
    BR: [0, 1, 4]
  },
  {
    Q: "Quelles sont les deux affirmations vraies concernant les clauses de non-responsabilité des politiques de pare-feu ? (Choisissez-en deux.",
    R: [
      "A. Ils ne peuvent pas être utilisés en combinaison avec l'authentification des utilisateurs.",
      "B. Ils ne peuvent être appliqués qu'aux interfaces sans fil.",
      "C. Les utilisateurs doivent accepter la clause de non-responsabilité pour continuer.",
      "D. La page de déni de responsabilité est personnalisable."
    ],
    BR: [2, 3]
  },
  {
    Q: "Lesquelles des affirmations suivantes sont vraies à propos des utilisateurs PKI créés dans un dispositif FortiGate ? (Choisissez-en deux.)",
    R: [
      "A. Ils peuvent être utilisés pour l'authentification par jeton",
      "B. Peut être utilisé pour l'authentification à deux facteurs",
      "C. Sont utilisés pour l'authentification par certificat",
      "D. Ne peuvent pas être membres de groupes d'utilisateurs"
    ],
    BR: [1, 2]
  },
  {
    Q: "Laquelle des affirmations suivantes concernant les temporisations de l'agent collecteur FSSO est vraie ?",
    R: [
      "A. L'intervalle de vérification de la station de travail est utilisé pour vérifier périodiquement si une station de travail est toujours membre du domaine.",
      "B. L'intervalle de vérification de changement d'adresse IP surveille l'adresse IP du serveur où l'agent collecteur est installé et met à jour la configuration de l'agent collecteur si elle change.",
      "C. L'expiration du cache du groupe d'utilisateurs est utilisée pour faire vieillir les groupes surveillés.",
      "D. L'intervalle de temporisation des entrées mortes est utilisé pour faire vieillir les entrées dont l'état n'est pas vérifié."
    ],
    BR: [3]
  },
  {
    Q: "Quel est l'inconvénient de l'utilisation du mode d'interrogation de FSSO NetAPI par rapport à FSSO Security Event Log (WinSecLog) ?",
    R: [
      "A. Il nécessite l'installation d'un agent DC dans certains des DC Windows.",
      "B. Il est plus lent.",
      "C. Elle peut manquer certains événements de connexion.",
      "D. Elle nécessite l'accès à un serveur DNS pour la résolution des noms des stations de travail."
    ],
    BR: [2]
  },
  {
    Q: "Quelles sont les deux conditions requises pour que le mode DC-agent FSSO fonctionne correctement dans un environnement Windows AD ? (Choisissez-en deux.)",
    R: [
      "A. Le serveur DNS doit résoudre correctement tous les noms de postes de travail.",
      "B. Le service de registre distant doit être exécuté sur tous les postes de travail.",
      "C. L'agent collecteur doit être installé dans l'un des contrôleurs de domaine Windows.",
      "D. Un même utilisateur ne peut pas être connecté à deux postes de travail différents en même temps."
    ],
    BR: [0, 1]
  },
  {
    Q: "Quelles sont les affirmations vraies concernant l'authentification des utilisateurs locaux ? (Choisissez-en deux.)",
    R: [
      "A. L'authentification à deux facteurs peut être activée sur une base par utilisateur.",
      "B. Les utilisateurs locaux sont réservés aux comptes d'administration et ne peuvent pas être utilisés pour authentifier les utilisateurs du réseau.",
      "C. Les administrateurs peuvent créer les comptes d'utilisateur est un serveur distant et stocker les mots de passe des utilisateurs localement dans la FortiGate.",
      "D. Les noms d'utilisateur et les mots de passe peuvent être stockés localement sur la FortiGate."
    ],
    BR: [0, 3]
  },
  {
    Q: "Le port1 de la FortiGate est connecté à l'Internet. Le port FortiGate est connecté au réseau interne. Examinez la configuration du pare-feu illustrée dans la pièce à conviction, puis répondez à la question ci-dessous. D'après la configuration du pare-feu illustrée dans la pièce, quelle affirmation est correcte ?",
    R: [
      "A. Un utilisateur qui ne s'est pas authentifié peut accéder à Internet en utilisant n'importe quel protocole qui ne déclenche pas de demande d'authentification.",
      "B. Un utilisateur qui n'est pas authentifié peut accéder à Internet en utilisant n'importe quel protocole, à l'exception de HTTP, HTTPS, Telnet et FTP.",
      "C. Un utilisateur doit s'authentifier à l'aide des protocoles HTTP, HTTPS, SSH, FTP ou Telnet avant de pouvoir accéder à tous les services Internet.",
      "D. L'accès Internet DNS est toujours autorisé, même pour les utilisateurs qui ne se sont pas authentifiés."
    ],
    BR: [3]
  },
  {
    Q: "Lorsque l'authentification de la politique de pare-feu est activée, quels sont les protocoles qui peuvent déclencher un défi d'authentification ? (Choisissez-en deux)",
    R: [
      "A. SMTP",
      "B. POP3",
      "C. HTTP",
      "D. FTP"
    ],
    BR: [2, 3]
  },
  {
    Q: "Quelle affirmation concernant le délai d'authentification de la politique de pare-feu est vraie ?",
    R: [
      "A. Il s'agit d'un délai d'inactivité. Le FortiGate considère qu'un utilisateur est \"inactif\" s'il ne voit pas de paquets provenant de l'IP source de l'utilisateur.",
      "B. Il s'agit d'un hard timeout. Le FortiGate supprime la stratégie temporaire pour l'adresse IP source d'un utilisateur après l'expiration de ce délai.",
      "C. Il s'agit d'un délai d'inactivité. Le FortiGate considère qu'un utilisateur est \"inactif\" s'il ne voit pas de paquets provenant du MAC source de l'utilisateur.",
      "D. Il s'agit d'un hard timeout. Le FortiGate supprime la politique temporaire pour l'adresse MAC source d'un utilisateur après l'expiration de ce délai."
    ],
    BR: [0]
  },
  {
    Q: "Lorsque l'authentification de la politique de pare-feu est activée, seul le trafic sur les protocoles supportés sera déclenche un défi d'authentification. Sélectionnez tous les protocoles pris en charge parmi les suivants :",
    R: [
      "A. SMTP",
      "B. SSH",
      "C. HTTP",
      "D. FTP",
      "E. SCP"
    ],
    BR: [2, 3]
  },
  {
    Q: "Parmi les types d'authentification suivants, lesquels sont pris en charge par les unités FortiGate ? (Sélectionnez toutes les réponses applicables.)",
    R: [
      "A. Kerberos",
      "B. LDAP",
      "C. RADIUS",
      "D. Utilisateurs locaux"
    ],
    BR: [1, 2, 3]
  },
  {
    Q: "Lesquels des éléments suivants sont des types de groupes d'utilisateurs d'authentification valides sur une unité FortiGate ? (Sélectionnez toutes les réponses applicables.)",
    R: [
      "A. Pare-feu",
      "B. Service d'annuaire",
      "C. Local",
      "D. LDAP",
      "E. ICP"
    ],
    BR: [0]
  },
  {
    Q: "Un administrateur a configuré une unité FortiGate de sorte que les utilisateurs finaux doivent s'authentifier auprès du pare-feu à l'aide de certificats numériques avant de naviguer sur Internet. De quoi l'utilisateur doit-il disposer pour que l'authentification soit réussie ? (Sélectionnez toutes les réponses applicables.)",
    R: [
      "A. Une entrée dans un annuaire LDAP pris en charge.",
      "B. Un certificat numérique émis par un serveur CA.",
      "C. Un nom d'utilisateur et un mot de passe valides.",
      "D. Un certificat numérique émis par l'unité FortiGate.",
      "E. L'appartenance à un groupe d'utilisateurs du pare-feu."
    ],
    BR: [1, 4]
  },
  {
    Q: "L'unité FortiGate peut être configurée pour permettre l'authentification auprès d'un serveur RADIUS. Le serveur RADIUS peut utiliser plusieurs protocoles d'authentification différents au cours du processus d'authentification. Lesquels des protocoles d'authentification suivants sont valides et peuvent être utilisés lorsqu'un utilisateur s'authentifie auprès du serveur RADIUS ? (Sélectionnez toutes les réponses applicables.)",
    R: [
      "A. MS-CHAP-V2 (protocole d'authentification Microsoft Challenge-Handshake v2)",
      "B. PAP (Protocole d'authentification par mot de passe)",
      "C. CHAP (Challenge-Handshake Authentication Protocol)",
      "D. MS-CHAP (Microsoft Challenge-Handshake Authentication Protocol V1)",
      "E. FAP (FortiGate Authentication Protocol)"
    ],
    BR: [0, 1, 2, 3]
  },
  {
    Q: "Lesquels des éléments suivants sont des composants valides de Fortinet Server Authentication Extensions (FSAE) ? (Sélectionnez toutes les réponses applicables.)",
    R: [
      "A. Agent de sécurité local du domaine.",
      "B. Collector Agent.",
      "C. Agent Active Directory.",
      "D. Agent d'authentification de l'utilisateur.",
      "E. Domain Controller Agent."
    ],
    BR: [1, 4]
  },
  {
    Q: "Le paramètre Idle Timeout d'une unité FortiGate s'applique aux éléments suivants ?",
    R: [
      "A. La navigation sur le Web",
      "B. Les connexions FTP",
      "C. Authentification des utilisateurs",
      "D. Accès administrateur",
      "E. Remplacement du filtrage Web"
    ],
    BR: [1, 4]
  },
  {
    Q: "Avec FSSO, un utilisateur de domaine peut s'authentifier soit auprès du contrôleur de domaine exécutant l'agent collecteur et l'agent de contrôleur de domaine, soit auprès d'un contrôleur de domaine exécutant uniquement l'agent de contrôleur de domaine. Si vous tentez de vous authentifier auprès du contrôleur de domaine secondaire exécutant uniquement l'agent de contrôleur de domaine, laquelle des affirmations suivantes est correcte ? (Sélectionnez toutes les réponses applicables.)",
    R: [
      "A. L'événement de connexion est envoyé à l'agent collecteur.",
      "B. L'unité FortiGate reçoit les informations utilisateur de l'agent de contrôleur de domaine du contrôleur secondaire.",
      "C. L'agent collecteur effectue la recherche DNS de l'adresse IP du client authentifié.",
      "D. L'utilisateur ne peut pas être authentifié auprès de l'appareil FortiGate de cette manière car chaque agent de contrôleur de domaine nécessite un agent collecteur dédié."
    ],
    BR: [0, 2]
  },
  {
    Q: "Lequel des énoncés suivants est correct en fonction de la configuration du pare-feu illustrée dans la pièce à conviction ? A. Un utilisateur peut accéder à Internet en utilisant uniquement les protocoles pris en charge par l'authentification de l'utilisateur.",
    R: [
      "A. Un utilisateur peut accéder à Internet en utilisant uniquement les protocoles pris en charge par l'authentification de l'utilisateur.",
      "B. Un utilisateur peut accéder à Internet en utilisant n'importe quel protocole, à l'exception de HTTP, HTTPS, Telnet et FTP. Ces protocoles nécessitent une authentification avant que l'utilisateur ne soit autorisé à accéder.",
      "C. Un utilisateur doit s'authentifier en utilisant le protocole HTTP, HTTPS, SSH, FTP ou Telnet avant de pouvoir accéder à des services.",
      "D. Un utilisateur ne peut pas accéder à Internet à l'aide d'un quelconque protocole, à moins qu'il n'ait passé l'authentification du pare-feu."
    ],
    BR: [3]
  },
  {
    Q: "Parmi les agents FSSO suivants, lesquels sont requis pour une solution en mode agent DC ? (Choisissez-en 2)",
    R: [
      "A. Agent FSSO",
      "B. Agent DC",
      "C. Agent collecteur",
      "D. Serveur Radius"
    ],
    BR: [1, 2]
  },
  {
    Q: "Les fichiers signalés comme \"suspects\" ont été soumis à quel contrôle Antivirus\" ?",
    R: [
      "A. Grayware",
      "B. Virus",
      "C. Bac à sable",
      "D. Heuristique"
    ],
    BR: [3]
  },
  {
    Q: "Quelles options de mise à jour des définitions d'antivirus et d'attaques sont prises en charge par les unités FortiGate ? (Choisissez-en deux.)",
    R: [
      "A. Mise à jour manuelle en téléchargeant les signatures depuis le site d'assistance.",
      "B. Mises à jour automatiques FortiGuard.",
      "C. Pousser les mises à jour depuis le réseau de distribution FortiGuard.",
      "D. Exécutez la commande fortiguard-AV-AS à partir de l'interface CLI."
    ],
    BR: [0, 2]
  },
  {
    Q: "Quelle affirmation est correcte concernant l'analyse antivirus sur une unité FortiGate ?",
    R: [
      "A. L'analyse antivirus est activée par défaut.",
      "B. Le support client Fortinet active l'analyse antivirus à distance pour vous.",
      "C. L'analyse antivirus doit être activée dans un profil de sécurité, qui doit être appliqué à une politique de pare-feu.",
      "D. L'activation de l'analyse antivirus dans un profil de sécurité permet d'activer la protection antivirus pour l'ensemble du trafic transitant par la FortiGate."
    ],
    BR: [2]
  },
  {
    Q: "Quel mode d'inspection antivirus doit être utilisé pour analyser les protocoles SMTP, FTP, POP3 et SMB ?",
    R: [
      "A. Basé sur un proxy",
      "B. Basé sur le DNS",
      "C. Basé sur le flux",
      "D. Man-in-the-middle."
    ],
    BR: [2]
  },
  {
    Q: "Laquelle des options suivantes pouvez-vous utiliser pour mettre à jour les définitions de virus sur une unité FortiGate ? (Sélectionnez toutes les options applicables.)",
    R: [
      "A. Mise à jour par poussée.",
      "B. Mise à jour planifiée",
      "C. Mise à jour manuelle",
      "D. Mise à jour FTP"
    ],
    BR: [0, 1, 2]
  },
  {
    Q: "Parmi les fonctions suivantes de mise à jour des définitions d'antivirus et d'attaques, lesquelles sont prises en charge par les unités FortiGate ? (Sélectionnez toutes les réponses applicables.)",
    R: [
      "A. Mises à jour manuelles, à l'initiative de l'utilisateur, à partir du réseau de distribution FortiGuard.",
      "B. Mises à jour des définitions d'antivirus et d'attaques et des moteurs antivirus programmées toutes les heures, tous les jours ou toutes les semaines à partir du réseau de distribution FortiGuard.",
      "C. Mises à jour push du réseau de distribution FortiGuard.",
      "D. État des mises à jour, y compris les numéros de version, les dates d'expiration et les dates et heures des mises à jour les plus récentes."
    ],
    BR: [0, 1, 2, 3]
  },
  {
    Q: "Une unité FortiGate peut rechercher des virus sur quels types de trafic réseau ? (Sélectionnez tous ceux qui s'appliquent).",
    R: [
      "A. POP3",
      "B. FTP",
      "C. SMTP",
      "D. SNMP",
      "E. NetBios"
    ],
    BR: [0, 1, 2]
  },
  {
    Q: "Quels sont les trois différents types de mode de conservation qui peuvent se produire sur un dispositif FortiGate ? (Choisissez-en trois.)",
    R: [
      "A. Proxy",
      "B. Système d'exploitation",
      "C. Noyau",
      "D. Système",
      "E. Dispositif"
    ],
    BR: [0, 2, 3]
  },
  {
    Q: "Un dispositif FortiGate est configuré pour effectuer une mise à jour AV & IS programmée toutes les heures. Compte tenu des informations de la pièce à conviction, quand la prochaine mise à jour aura-t-elle lieu ?",
    R: [
      "A. 01:00",
      "B. 02:05",
      "C. 11:00",
      "D. 11:08"
    ],
    BR: [3]
  },
  {
    Q: "Un administrateur a activé l'analyse antivirus basée sur le proxy et a configuré les paramètres suivants : config firewall profile-protocol-options / edit default / config http / set oversize-limit 10 / set options oversize / fin / fin. Quelle affirmation concernant la configuration ci-dessus est vraie ?",
    R: [
      "A. Les fichiers de plus de 10 Mo ne sont pas analysés pour détecter les virus et seront bloqués.",
      "B. La FortiGate analyse uniquement les 10 premiers Mo d'un fichier.",
      "C. Les fichiers de plus de 10 Mo sont envoyés au moteur heuristique pour être analysés.",
      "D. FortiGate analyse les fichiers par morceaux de 10 Mo."
    ],
    BR: [0]
  },
  {
    Q: "Quelle est la durée la plus longue autorisée sur un dispositif FortiGate pour que l'analyse antivirus se termine ?",
    R: [
      "A. 20 secondes",
      "B. 30 secondes",
      "C. 45 secondes",
      "D. 10 secondes"
    ],
    BR: [1]
  },
  {
    Q: "Les fichiers dont la taille dépasse la limite de surdimensionnement sont soumis à quel contrôle Antivirus ?",
    R: [
      "A. Grayware",
      "B. Virus",
      "C. Bac à sable",
      "D. Heuristique"
    ],
    BR: [3]
  },
  {
    Q: "Quel type de mode de conservation écrit un message de journal immédiatement, plutôt que lorsque le périphérique quitte le mode de conservation ?",
    R: [
      "A. Noyau",
      "B. Proxy",
      "C. Système",
      "D. Dispositif"
    ],
    BR: [2]
  },
  {
    Q: "Quel est le nombre maximum de bases de données virales différentes qu'un FortiGate peut avoir ?",
    R: [
      "A. 5",
      "B. 2",
      "C. 3",
      "D. 4"
    ],
    BR: [2]
  },
  {
    Q: "Lesquelles des affirmations suivantes sont vraies concernant le certificat SSL Proxy qui doit être utilisé pour l'inspection du contenu SSL ? (Choisissez-en deux.)",
    R: [
      "A. Il ne peut pas être signé par une autorité de certification privée",
      "B. Il doit comporter soit le champ \"CA=True\", soit le champ \"Key Usage-KeyCertSign\".",
      "C. Il doit être installé dans le dispositif FortiGate.",
      "D. L'objet déposé doit contenir soit le FQDN, soit l'adresse IP du dispositif FortiGate."
    ],
    BR: [2, 3]
  },
  {
    Q: "Lesquels des énoncés suivants concernant le mode conversationnel sont vrais ? (Choisissez-en deux.)",
    R: [
      "A. FortiGate cesse d'envoyer des fichiers à FortiSandbox pour inspection.",
      "B. FortiGate cesse d'effectuer des vérifications RPF sur les paquets entrants.",
      "C. Les administrateurs ne peuvent pas modifier la configuration.",
      "D. Les administrateurs peuvent accéder à la FortiGate uniquement via le port console."
    ],
    BR: [0, 2]
  },
  {
    Q: "Examinez cette configuration de la FortiGate : config system global / set av-failopen pass / end. Examinez la sortie de la commande de débogage suivante : # diagnose hardware sysinfo conserve / mode de conservation de la mémoire : on / RAM totale : 3040 Mo / Mémoire utilisée : 2948 Mo 97% / mémoire libérable : 92 Mo 38% / mémoire utilisée + seuil de libération extrême : 2887 MB 95% / mémoire utilisée seuil rouge : 2675 Mo 88% / seuil de mémoire utilisée vert : 2492 MB 82%. D'après les résultats du diagnostic ci-dessus, comment le FortiGate gère-t-il le trafic des nouvelles sessions qui nécessitent une inspection ?",
    R: [
      "A. Il est autorisé, mais sans inspection",
      "B. Il est autorisé et inspecté tant que l'inspection est basée sur le flux",
      "C. Il est abandonné.",
      "D. Il est autorisé et inspecté, à condition que la seule inspection requise soit celle de l'antivirus."
    ],
    BR: [0]
  },
  {
    Q: "Laquelle des fonctions suivantes de filtrage du spam n'est PAS prise en charge par une unité FortiGate ?",
    R: [
      "A. Vérification de l'en-tête des Multipurpose Internet Mail Extensions (MIME)",
      "B. Recherche DNS HELO",
      "C. Greylisting",
      "D. Mot banni"
    ],
    BR: [2]
  },
  {
    Q: "Lorsqu'un utilisateur tente de se connecter à un site HTTPS, quel est le résultat attendu avec cette configuration ? (Voir la pièce à conviction.)",
    R: [
      "A. L'utilisateur doit s'authentifier avant d'accéder à des sites dont les certificats SSL ne sont pas fiables.",
      "B. L'utilisateur reçoit des avertissements relatifs aux certificats lorsqu'il se connecte à des sites dont les certificats SSL ne sont pas fiables.",
      "C. L'utilisateur est autorisé à accéder à tous les sites dotés de certificats SSL non fiables, sans avertissement de certificat.",
      "D. L'utilisateur ne peut pas se connecter aux sites qui ont des certificats SSL non fiables (aucune exception n'est prévue)."
    ],
    BR: [1]
  },
  {
    Q: "Une politique de pare-feu a été configurée pour que le serveur de messagerie interne reçoive des courriers électroniques de parties externes via SMTP. Les figures A et B montrent les profils d'antivirus et de filtre de messagerie appliqués à cette politique. Quel est le comportement correct lorsque la pièce jointe d'un e-mail est détectée comme un virus par le moteur antivirus de FortiGate ?",
    R: [
      "A. L'unité FortiGate supprime le fichier infecté et envoie l'e-mail avec un message de remplacement pour avertir le destinataire que la pièce jointe d'origine était infectée.",
      "B. L'unité FortiGate rejette l'e-mail infecté et l'expéditeur reçoit un message d'échec de livraison.",
      "C. L'unité FortiGate supprime le fichier infecté et ajoute un message de remplacement.",
      "D. L'expéditeur et le destinataire sont tous deux informés que le fichier infecté a été supprimé."
    ],
    BR: [1]
  },
  {
    Q: "Quelles déclarations concernant le processus de mise à niveau du micrologiciel sur un cluster haute disponibilité (HA) actif-actif sont vraies ? (Choisissez-en deux.)",
    R: [
      "A. L'image du micrologiciel doit être téléchargée manuellement sur chaque FortiGate.",
      "B. Seuls les périphériques FortiGate secondaires sont redémarrés.",
      "C. La mise à niveau ininterrompue est activée par défaut.",
      "D. L'équilibrage de la charge de trafic est temporairement désactivé pendant la mise à niveau du firmware."
    ],
    BR: [1, 3]
  },
  {
    Q: "Laquelle des séquences suivantes décrit l'ordre correct des critères utilisés pour la sélection d'une unité maître au sein d'un cluster FortiGate à haute disponibilité (HA) lorsque la priorité est désactivée ?",
    R: [
      "A. 1. moniteur de port, 2. priorité de l'unité, 3. temps de fonctionnement, 4. numéro de série.",
      "B. 1. moniteur de port, 2. temps de fonctionnement, 3. priorité de l'unité, 4. numéro de série.",
      "C. 1. priorité de l'unité, 2. temps de fonctionnement, 3. moniteur de port, 4. numéro de série.",
      "D. 1. temps de fonctionnement, 2. priorité de l'unité, 3. moniteur de port, 4. numéro de série."
    ],
    BR: [1]
  },
  {
    Q: "Lesquels des énoncés suivants sont corrects concernant la commande HA diagnose sys ha reset- uptime ? (Choisissez-en deux.)",
    R: [
      "A. Le dispositif sur lequel cette commande est exécutée est susceptible de passer du statut de maître à celui d'esclave si la fonction de neutralisation est désactivée.",
      "B. Le dispositif sur lequel cette commande est exécutée est susceptible de passer du statut de maître à celui d'esclave si la priorité est activée.",
      "C. Cette commande n'a aucun impact sur l'algorithme HA.",
      "D. Cette commande réinitialise la variable uptime utilisée dans l'algorithme HA ; elle peut donc provoquer l'élection d'un nouveau maître."
    ],
    BR: [0, 3]
  },
  {
    Q: "Quelles sont les conditions requises pour qu'un cluster HA maintienne les connexions TCP après un basculement de périphérique ou de liaison ? (Choisissez-en deux.)",
    R: [
      "A. Activer la reprise de session.",
      "B. Activer le contournement.",
      "C. Les connexions doivent être UDP ou ICMP.",
      "D. Les connexions ne doivent pas être gérées par un proxy."
    ],
    BR: [0, 3]
  },
  {
    Q: "Dans HA, l'option Réserver le port de gestion pour le membre du cluster est sélectionnée comme indiqué dans l'illustration ci-dessous. Quelles sont les affirmations correctes concernant ce paramètre ? (Choisissez-en deux.)",
    R: [
      "A. Les paramètres d'interface du port 7 ne seront pas synchronisés avec les autres membres du cluster.",
      "B. L'adresse IP attribuée à cette interface ne doit pas chevaucher le sous-réseau d'adresses IP attribué à une autre interface.",
      "C. Lorsque vous vous connectez au port7, vous vous connectez toujours à l'appareil maître.",
      "D. Une adresse de passerelle peut être configurée pour le port7."
    ],
    BR: [0, 3]
  },
  {
    Q: "La pièce montre la commande Disconnect Cluster Member dans une unité FortiGate faisant partie d'un cluster HA avec deux membres HA. Quel est l'effet de la commande Disconnect Cluster Member telle qu'elle est présentée dans l'illustration ? (Choisissez-en deux.)",
    R: [
      "A. Le port 3 est configuré avec une adresse IP pour l'accès à la gestion.",
      "B. Les règles de pare-feu sont purgées sur l'unité déconnectée.",
      "C. Le mode HA passe à standalone.",
      "D. Le nom d'hôte du système est défini sur le numéro de série de l'unité."
    ],
    BR: [0, 2]
  },
  {
    Q: "Deux périphériques sont dans un cluster HA, les noms d'hôte des périphériques sont STUDENT et REMOTE. La pièce A montre la sortie de commande de diagnose sys session stat pour le dispositif STUDENT. La pièce B montre la sortie de la commande diagnose sys session stat pour le dispositif REMOTE. Compte tenu des informations fournies dans les pièces, laquelle des affirmations suivantes est correcte ? (Choisissez-en deux.)",
    R: [
      "A. STUDENT est probablement le périphérique maître.",
      "B. La collecte de session est probablement activée.",
      "C. Le mode de cluster est actif-passif.",
      "D. Il n'y a pas assez d'informations pour déterminer le mode de cluster."
    ],
    BR: [0, 3]
  },
  {
    Q: "Un administrateur a formé un cluster de haute disponibilité impliquant deux unités FortiGate. [Plusieurs commutateurs de couche 2 en amont] -- [ Cluster FortiGate HA ] -- [ Plusieurs commutateurs de couche 2 en aval ]. L'administrateur souhaite s'assurer qu'une seule défaillance de lien aura un impact minimal sur le débit global du trafic à travers ce cluster. Laquelle des options suivantes décrit la meilleure mesure que l'administrateur peut prendre ?",
    R: [
      "A. Augmenter le nombre d'unités FortiGate dans le cluster et configurer HA en mode actif-actif.",
      "B. Activer la surveillance de toutes les interfaces actives.",
      "C. Configurez une conception à maillage complet qui utilise des interfaces redondantes.",
      "D. Configurez la fonction de serveur ping HA pour permettre le basculement HA en cas d'interruption d'un chemin."
    ],
    BR: [2]
  },
  {
    Q: "Dans un cluster haute disponibilité fonctionnant en mode actif-actif, laquelle des propositions suivantes décrit correctement le chemin emprunté par le paquet SYN d'une session HTTP qui est déchargé sur une unité esclave ?",
    R: [
      "A. Demande : hôte interne ; FortiGate esclave ; FortiGate maître ; Internet ; serveur Web.",
      "B. Demande : hôte interne ; FortiGate esclave ; Internet ; serveur web.",
      "C. Demande : hôte interne ; FortiGate esclave ; FortiGate maître ; Internet ; serveur Web.",
      "D. Demande : hôte interne ; FortiGate maître ; FortiGate esclave ; Internet ; serveur web."
    ],
    BR: [3]
  },
  {
    Q: "Lequel des énoncés suivants décrit correctement le fonctionnement d'une unité FortiGate en mode Transparent ?",
    R: [
      "A. Pour gérer l'unité FortiGate, l'une des interfaces doit être désignée comme interface de gestion. Cette interface ne doit pas être utilisée pour le transfert de données.",
      "B. Une adresse IP est utilisée pour gérer l'unité FortiGate mais cette adresse IP n'est pas associée à une interface spécifique.",
      "C. L'unité FortiGate doit utiliser des adresses IP publiques sur les réseaux interne et externe.",
      "D. L'unité FortiGate utilise des adresses IP privées sur le réseau interne mais les cache en utilisant la traduction d'adresse."
    ],
    BR: [1]
  },
  {
    Q: "Quelles sont les conditions requises pour qu'un cluster maintienne les connexions TCP après un basculement de périphérique ou de liaison ? (Sélectionnez toutes les réponses applicables.)",
    R: [
      "A. Activer la reprise de session.",
      "B. S'applique uniquement aux connexions gérées par un proxy.",
      "C. S'applique uniquement aux connexions UDP et IMP.",
      "D. Les connexions ne doivent pas être gérées par un proxy."
    ],
    BR: [0, 3]
  },
  {
    Q: "Two FortiGate devices fail to form an HA cluster, the device hostnames are STUDENT and REMOTE. Exhibit A shows the command output of show system ha for the STUDENT device. Exhibit B shows the command output of show system ha for the REMOTE device. Which one of the following is the most likely reason that the cluster fails to form?",
    R: [
      "A. Password",
      "B. HA mode",
      "C. Heartbeat",
      "D. Override"
    ],
    BR: [1]
  },
  {
    Q: "Lequel des énoncés suivants décrit correctement l'utilisation de la commande \"diagnose sys ha reset-uptime\" ?",
    R: [
      "A. Pour forcer un basculement HA lorsque le paramètre HA override est désactivé.",
      "B. Pour forcer un basculement HA lorsque le paramètre de remplacement HA est activé.",
      "C. Pour effacer les compteurs HA.",
      "D. Pour redémarrer une unité FortiGate qui fait partie d'un cluster HA."
    ],
    BR: [0]
  },
  {
    Q: "Quels sont les éléments qui doivent être identiques pour que deux unités FortiGate forment un cluster HA ? (Choisissez-en deux)",
    R: [
      "A. Firmware.",
      "B. Modèle.",
      "C. Nom d'hôte.",
      "D. Fuseau horaire du système."
    ],
    BR: [0, 1]
  },
  {
    Q: "Lequel des énoncés suivants décrit les objectifs des paquets ARP gratuits envoyés par un cluster HA ?",
    R: [
      "A. Pour synchroniser les tables ARp dans toutes les FortiGate Unis qui font partie du cluster HA.",
      "B. Pour notifier aux commutateurs du réseau qu'une nouvelle unité maître HA a été élue.",
      "C. Pour notifier à l'unité maître que les dispositifs esclaves sont toujours en marche et vivants.",
      "D. Pour notifier à l'unité maître les adresses MAC physiques des unités esclaves."
    ],
    BR: [1]
  },
  {
    Q: "Lesquels des énoncés suivants sont corrects concernant une unité HA maître ? (Choisissez-en deux)",
    R: [
      "A. Il ne doit y avoir qu'une seule unité maîtresse dans chaque grappe vitale HA.",
      "B. Le maître synchronise la configuration du cluster avec le stree",
      "C. Seul le maître dispose d'une interface HA de gestion réservée.",
      "D. Les interfaces Heartbeat ne sont pas nécessaires sur une unité maître."
    ],
    BR: [0, 1]
  },
  {
    Q: "Quelle affirmation décrit la manière dont le trafic circule dans les sessions gérées par une unité esclave dans un cluster HA actif-actif ?",
    R: [
      "A. Les paquets sont envoyés directement à l'unité esclave en utilisant l'adresse MAC physique de l'esclave.",
      "B. Les paquets sont envoyés directement à l'unité esclave en utilisant l'adresse MAC virtuelle HA.",
      "C. Les paquets arrivent aux deux unités simultanément, mais seule l'unité salve transmet la session.",
      "D. Les paquets sont d'abord envoyés à l'unité maître, qui les transmet ensuite à l'unité esclave."
    ],
    BR: [3]
  },
  {
    Q: "Lesquelles des affirmations suivantes sont correctes concernant le protocole de support de vie de session de FortiGate ? (Choisissez-en deux)",
    R: [
      "A. Par défaut, les sessions UDP ne sont pas synchronisées.",
      "B. Jusqu'à quatre dispositifs FortiGate en mode autonome sont pris en charge.",
      "C. seule l'unité maître gère le trafic.",
      "D. Permet la synchronisation des sessions par VDOM."
    ],
    BR: [0, 3]
  },
  {
    Q: "Quels sont les critères par défaut pour la sélection de l'unité maître HA dans un cluster HA ?",
    R: [
      "A. surveillance des ports, priorité, temps de fonctionnement, numéro de série",
      "B. Surveillance des ports, temps de fonctionnement, priorité, numéro de série.",
      "C. Priorité, temps de fonctionnement, surveillance des ports, numéro de série",
      "D. uptime, priorité, moniteur de port, numéro de série"
    ],
    BR: [1]
  },
  {
    Q: "Quelles informations sont synchronisées entre deux unités FortiGate qui appartiennent au même cluster HA ? (Choisissez-en trois)",
    R: [
      "A. Adresses IP attribuées à l'interface activée par DHCP.",
      "B. Le nom d'hôte du dispositif maître.",
      "C. Routage configuré et état",
      "D. Configuration IP de l'interface de gestion HA réservée.",
      "E. Politiques et objets du pare-feu."
    ],
    BR: [0, 2, 4]
  },
  {
    Q: "Visualisez la pièce à conviction. D'après cette sortie, quelles sont les affirmations correctes ? (Choisissez-en deux.)",
    R: [
      "A. Le VDOM a11 n'est pas synchronisé entre les dispositifs FortiGate primaire et secondaire.",
      "B. Le VDOM racine n'est pas synchronisé entre les dispositifs FortiGate primaire et secondaire.",
      "C. Les dispositifs FortiGate ont trois VDOM.",
      "D. La configuration globale est synchronisée entre les dispositifs FortiGate primaire et secondaire."
    ],
    BR: [1, 3]
  },
  {
    Q: "Examinez l'exposition d'une configuration de politique de proxy explicite. En cas de tentative de connexion par proxy provenant de l'adresse IP 10.0.1.5 et d'un utilisateur qui ne s'est pas encore authentifié, quelle action le proxy FortiGate entreprend-il ?",
    R: [
      "A. L'utilisateur est invité à s'authentifier. Le trafic de l'utilisateur Student sera autorisé par la politique #1. Le trafic de tout autre utilisateur sera autorisé par la politique n°2.",
      "B. L'utilisateur n'est pas invité à s'authentifier. La connexion est autorisée par la politique de proxy #2",
      "C. L'utilisateur n'est pas invité à s'authentifier. La connexion sera autorisée par la politique de proxy #1",
      "D. L'utilisateur est invité à s'authentifier. Seul le trafic de l'utilisateur Student est autorisé. Le trafic de tout autre utilisateur sera bloqué."
    ],
    BR: [3]
  },
  {
    Q: "Quelle est la raison valable pour utiliser l'authentification basée sur la session au lieu de l'authentification basée sur l'IP dans une solution de proxy web FortiGate ?",
    R: [
      "A. Les utilisateurs doivent saisir manuellement leurs informations d'identification chaque fois qu'ils se connectent à un autre site web.",
      "B. Les utilisateurs proxy sont authentifiés via FSSO.",
      "C. Plusieurs utilisateurs partagent la même adresse IP.",
      "D. Les utilisateurs du proxy sont authentifiés via RADIUS."
    ],
    BR: [2]
  },
  {
    Q: "Examinez la configuration suivante du proxy Web FortiGate, puis répondez à la question ci-dessous : config web-proxy explicit / set pac-file-server-status enable / set pac-file-server-port 8080 / set pac-filename wad.dat / end. En supposant que l'adresse IP du proxy FortiGate est 10.10.1.1, quelle URL un navigateur Internet doit-il utiliser pour télécharger le fichier PAC ?",
    R: [
      "A. httos://10.10.1.1:8080",
      "B. https://10.10.1.1:8080/wpad.dat",
      "C. http://10.10.1.1:8080/",
      "D. http://10.10.1.1:8080/wpad.dat"
    ],
    BR: [3]
  },
  {
    Q: "Quelles sont les affirmations vraies concernant l'utilisation d'un fichier PAC pour configurer les paramètres du proxy web dans un navigateur Internet ? (Choisissez-en deux.)",
    R: [
      "A. Un seul proxy est pris en charge.",
      "B. Peut être importé manuellement dans le navigateur.",
      "C. Le navigateur peut le télécharger automatiquement depuis un serveur web.",
      "D. Peut inclure une liste de sous-réseaux iP de désanation auxquels le navigateur peut se connecter directement sans passer par le réseau de l'entreprise."
    ],
    BR: [2, 3]
  },
  {
    Q: "Quelles sont les deux méthodes prises en charge par le protocole de découverte automatique du proxy Web (WPAD) pour apprendre automatiquement l'URL où se trouve un fichier PAC ? (Choisissez-en deux.)",
    R: [
      "A. DHCP",
      "B. BOOTP",
      "C. DNS",
      "D. Configuration automatique d'IPv6"
    ],
    BR: [0, 2]
  },
  {
    Q: "Quelle est une raison valable pour utiliser l'authentification basée sur la session au lieu de l'authentification basée sur l'IP dans une solution de proxy web FortiGate ?",
    R: [
      "A. Les utilisateurs doivent saisir manuellement leurs informations d'identification chaque fois qu'ils se connectent à un autre site web.",
      "B. Les utilisateurs proxy sont authentifiés via FSSO.",
      "C. Plusieurs utilisateurs partagent la même adresse IP.",
      "D. Les utilisateurs du proxy sont authentifiés via RADIUS."
    ],
    BR: [2]
  },
  
  {
    Q: "Un navigateur Internet utilise la méthode WAD DNS pour découvrir l'adresse des fichiers PAC URL. Le serveur DNS répond à la demande du navigateur avec l'adresse IP 10.100.1.10. Quelle URL le navigateur utilisera-t-il pour télécharger le fichier PAC ?",
    R: [
      "http://10.100.1.10/proxy.pac",
      "https://10.100.1.10/",
      "http://10.100.1.10/wpad.dat",
      "https://10.100.1.10/proxy.pac"
    ],
    BR: [2]
  },
  {
    Q: "Quel protocole un navigateur Internet peut-il utiliser pour télécharger le fichier PAC avec la configuration du proxy web ?",
    R: [
      "HTTPS",
      "FTP",
      "TFTP",
      "HTTP"
    ],
    BR: [3]
  },
  {
    Q: "Lequel des éléments suivants doit être configuré sur une unité FortiGate pour rediriger les demandes de contenu vers des serveurs de cache Web distants ?",
    R: [
      "WCCP doit être activé sur l'interface faisant face au cache Web.",
      "Vous devez activer le Web-proxy explicite sur l'interface entrante.",
      "WCCP doit être activé en tant que paramètre global sur l'unité FortiGate.",
      "WCCP doit être activé sur toutes les interfaces de l'unité FortiGate par lesquelles le trafic HTTP passe."
    ],
    BR: [0]
  },
  {
    Q: "Lorsque vous utilisez la méthode WAD DNS, quel est le format FQDN que les navigateurs utilisent pour interroger le serveur DNS ?",
    R: [
      "wad. <domaine local>",
      "srv_tep.wpad. <domaine local>",
      "srv proxy. <domaine local>/wad.dat",
      "proxy. <domaine-local>.wpad"
    ],
    BR: [0]
  },
  {
    Q: "Quelles déclarations concernant l'authentification proxy explicite basée sur IP sont vraies ? (Choisissez-en deux.)",
    R: [
      "L'authentification basée sur l'IP est la plus adaptée pour authentifier les utilisateurs derrière un dispositif NAT.",
      "Les sessions provenant de la même adresse source sont traitées comme un seul utilisateur.",
      "L'authentification basée sur l'IP consomme moins de mémoire du FortiGate que l'authentification basée sur la session.",
      "FortiGate mémorise les sessions authentifiées à l'aide de cookies de navigateur."
    ],
    BR: [1, 2]
  },
  {
    Q: "Laquelle des affirmations suivantes est vraie concernant les paquets TCP SYN qui vont d'un client, via un proxy web implicite (proxy transparent), à un serveur web écoutant le port TCP 80 ? (Choisissez-en trois.)",
    R: [
      "L'adresse IP source correspond à l'adresse IP du client.",
      "L'adresse IP source correspond à l'adresse IP du proxy.",
      "L'adresse IP de destination correspond à l'adresse IP du proxy.",
      "L'adresse IP de destination correspond aux adresses IP du serveur.",
      "Le numéro du port TCP de destination est 80."
    ],
    BR: [0, 3, 4]
  },
  {
    Q: "Laquelle des affirmations suivantes est vraie concernant l'utilisation d'un fichier PAC pour configurer les paramètres du proxy web dans un navigateur Internet ? (Choisissez-en deux.)",
    R: [
      "Plus d'un proxy est supporté.",
      "Peut contenir une liste de destinations qui seront exemptées de l'utilisation de tout proxy.",
      "Peut contenir une liste d'URLs qui seront exemptées de l'inspection du filtrage web de FortiGate.",
      "Peut contenir une liste d'utilisateurs qui seront exemptés de l'utilisation de tout proxy."
    ],
    BR: [1, 2]
  },
  {
    Q: "Lesquels des points suivants sont des avantages de l'utilisation de la mise en cache web ? (Choisissez-en trois.)",
    R: [
      "Diminution de l'utilisation de la bande passante",
      "Réduire la charge du serveur",
      "Réduire l'utilisation du CPU de FortiGate",
      "Réduire l'utilisation de la mémoire de FortiGate",
      "Réduire les délais de circulation"
    ],
    BR: [0, 1, 4]
  },
  {
    Q: "Un administrateur souhaite bloquer les téléchargements HTTP. Examinez la pièce à conviction, qui contient l'adresse proxy créée à cette fin. Où l'adresse proxy doit-elle être utilisée ?",
    R: [
      "Comme la source dans une politique de pare-feu.",
      "Comme la source dans une politique de proxy.",
      "Comme destination dans une politique de pare-feu.",
      "Comme destination dans une politique de proxy."
    ],
    BR: [1]
  },
  {
    Q: "Lesquels des énoncés suivants sont vrais lors de l'utilisation de WAD avec la méthode de découverte DHCP ? (Choisissez-en deux.)",
    R: [
      "Si la méthode DHCP échoue, les navigateurs essaieront la méthode DINS.",
      "le navigateur doit être préconfiguré avec l'adresse IP des serveurs DHCP.",
      "Le navigateur envoie une requête DHCPINFORM au serveur DHCP.",
      "Le serveur DHCP fournit le fichier PAC à télécharger."
    ],
    BR: [0, 2]
  },
  {
    Q: "Examinez la configuration de ce fichier PAC : fonction FindProxyForURL(url, host). Lesquels des énoncés suivants sont vrais ? (Choisissez-en deux.)",
    R: [
      "Les navigateurs peuvent être configurés pour récupérer ce fichier PAC depuis le FortiGate.",
      "Toute requête web vers le 172.25.120.0/24 est autorisée à contourner le proxy.",
      "Toutes les demandes qui ne sont pas faites à Fortinet.com ou au sous-réseau 172.25.120.0/24, doivent passer par altproxy.corp.com : 8060.",
      "Toute requête web fortinet.com est autorisée à contourner le proxy."
    ],
    BR: [0, 3]
  },
  {
    Q: "Dans la sortie de la table de session de FortiOS, quel est le numéro correct de l'état du proto pour une connexion TCP établie et non proxiée ?",
    R: [
      "00",
      "11",
      "01",
      "05"
    ],
    BR: [2]
  },
  {
    Q: "Lesquels des énoncés suivants sont corrects concernant les configurations de VPN dialup IPsec pour les dispositifs FortiGate ? (Choisissez-en deux)",
    R: [
      "Le mode principal doit être utilisé lorsqu'il n'y a pas plus d'un VPN dialup IPsec configuré sur le même appareil FortiGate.",
      "Un appareil FortiGate avec un VPN IPsec configuré comme dialup peut initier la connexion du tunnel à n'importe quelle adresse IP distante.",
      "Peer ID doit être utilisé lorsqu'il y a plus d'un VPN dialup IPsec en mode agressif sur le même dispositif FortiGate.",
      "Le FortiGate ajoutera automatiquement une route statique à l'adresse source du sélecteur de mode rapide reçue de chaque pair distant."
    ],
    BR: [2, 3]
  },
  {
    Q: "Vous êtes chargé d'architecturer un nouveau déploiement IPsec avec les critères suivants : deux sites du siège social, pas de communication directe entre satellites, aucun routage dynamique, minimiser le nombre de tunnels. Quelle topologie doit être utilisée ?",
    R: [
      "Redondant",
      "Hub-and-spoke",
      "Maille partielle",
      "Entièrement maillé"
    ],
    BR: [1]
  },
  {
    Q: "Lesquels des énoncés suivants sont corrects ? (Choisissez-en deux.)",
    R: [
      "C'est une configuration IPsec redondante.",
      "La route Tunnel est la route principale pour la recherche du site distant. La route Tunnel est utilisée uniquement si le VPN TunnelB est en panne.",
      "Cette configuration nécessite au moins deux politiques de pare-feu dont l'action est définie sur IPsec.",
      "La détection des pairs morts doit être désactivée pour prendre en charge ce type de configuration IPsec."
    ],
    BR: [0, 1]
  },
  {
    Q: "Quels énoncés décrivent le mieux le VPN à découverte automatique (ADVPN). (Choisissez-en deux.)",
    R: [
      "Il nécessite l'utilisation de protocoles de routage dynamique afin que les rayons puissent apprendre les routes vers d'autres rayons.",
      "ADVPN n'est pris en charge qu'avec IKEv ?",
      "Les tunnels sont négociés dynamiquement entre les rayons.",
      "Chaque rayon nécessite la configuration d'un tunnel statique vers les autres rayons afin que les propositions de phase 1 et de phase 2 soient définies à l'avance."
    ],
    BR: [0, 2]
  },
  {
    Q: "Quels avantages y a-t-il à utiliser une configuration VPN IPSec en étoile au lieu d'un ensemble de tunnels IPSec entièrement maillés ? (Sélectionnez toutes les réponses qui s'appliquent.)",
    R: [
      "L'utilisation d'une topologie en étoile est nécessaire pour obtenir une redondance complète.",
      "L'utilisation d'une topologie en étoile simplifie la configuration car moins de tunnels sont nécessaires.",
      "L'utilisation d'une topologie en étoile permet un cryptage plus fort.",
      "Le routage au niveau d'un rayon est plus simple, comparé à un nœud maillé."
    ],
    BR: [1, 3]
  },
  {
    Q: "Quels énoncés sont des propriétés correctes d'un déploiement VPN à maillage partiel. (Choisissez deux.)",
    R: [
      "Les tunnels VPN s'interconnectent entre chaque site.",
      "Les tunnels VPN ne sont pas configurés entre chaque site.",
      "Certains sites sont accessibles via un site central.",
      "Il n'y a pas d'emplacement de hub dans un maillage partiel"
    ],
    BR: [1, 2]
  },
  {
    Q: "Examinez la configuration spanning tree suivante sur un FortiGate en mode transparent : config system interface edit <interface name> set stp-forward enable end. Quel énoncé est correct pour la configuration ci-dessus ?",
    R: [
      "Le FortiGate participe à l'arborescence (spanning tree)",
      "Le dispositif FortiGate transmet les messages spanning tree reçus.",
      "Des boucles de la couche 2 d'Ethernet sont susceptibles de se produire.",
      "Le FortiGate génère des trames BPDU de spanning tree."
    ],
    BR: [1]
  },
  {
    Q: "Quels avantages y a-t-il à utiliser une configuration VPN IPSec entièrement maillée au lieu d'un ensemble de tunnels IPSec en étoile ?",
    R: [
      "L'utilisation d'une topologie en étoile est nécessaire pour obtenir une redondance complète.",
      "L'utilisation d'une topologie à maillage complet simplifie la configuration.",
      "L'utilisation d'une topologie à maillage complet permet un cryptage plus fort.",
      "La topologie à maillage complet est la configuration la plus tolérante aux pannes."
    ],
    BR: [3]
  },
  {
    Q: "Lesquels des énoncés suivants sont corrects concernant la configuration du mode IKE ? (Choisissez-en deux)",
    R: [
      "Il peut attribuer dynamiquement des adresses IP aux clients VPN IPsec.",
      "Il peut attribuer dynamiquement des paramètres DNS aux clients VPN IPsec.",
      "Il utilise le protocole ESP.",
      "Il peut être activé dans la configuration de la phase 2."
    ],
    BR: [0, 1]
  },
  {
    Q: "Qu'est-ce qui est nécessaire dans une configuration FortiGate pour avoir plus d'un VPN IPsec dialup utilisant le mode agressif ?",
    R: [
      "Tous les VPN dialup en mode agressif DOIVENT accepter des connexions provenant du même ID de pair.",
      "Chaque ID d'homologue DOIT correspondre au FQDN de chaque homologue distant.",
      "Chaque dialup en mode agressif DOIT accepter des connexions provenant de différents peer ID.",
      "Le paramètre peer ID ne doit PAS être utilisé."
    ],
    BR: [2]
  },
  {
    Q: "Un administrateur réseau doit mettre en œuvre une redondance de route dynamique entre une unité FortiGate d'un bureau distant et une unité FortiGate du bureau central, via deux ISP différents. Quelle est la meilleure méthode ?",
    R: [
      "Utilisez deux ou plusieurs tunnels VPN IPSec basés sur les routes et activez OSPF sur l'interface virtuelle IPSec.",
      "Utilisez deux ou plusieurs tunnels VPN IPSec basés sur des règles et activez OSPF sur les interfaces virtuelles IPSec.",
      "Utilisez des VPN basés sur les routes sur l'unité FortiGate du bureau central pour annoncer les routes avec un protocole de routage dynamique et utilisez un VPN basé sur les politiques sur le bureau distant avec deux ou plusieurs routes statiques par défaut.",
      "Les protocoles de routage dynamique ne peuvent pas être utilisés sur les tunnels VPN IPSec."
    ],
    BR: [0]
  },
  {
    Q: "Quels énoncés décrivent correctement le fonctionnement en mode transparent ? (Choisissez-en trois.)",
    R: [
      "La FortiGate agit comme un pont transparent et transmet le trafic au niveau de la couche 2.",
      "Les paquets Ethernet sont transférés en fonction des adresses MAC de destination, et NON des adresses IP.",
      "La FortiGate transparente est clairement visible pour les hôtes du réseau dans une route de traçage IP.",
      "Permet l'inspection du trafic en ligne et la mise en place de pare-feu sans modifier le schéma IP du réseau.",
      "Toutes les interfaces de l'appareil FortiGate en mode transparent doivent être sur des sous-réseaux IP différents."
    ],
    BR: [0, 1, 3]
  },
  {
    Q: "Examinez la configuration suivante de spanning tree sur un FortiGate en mode transparent : config system interface edit <interface name> set stp-forward enable end. Quelle affirmation est correcte pour la configuration ci-dessus ?",
    R: [
      "Le FortiGate participe au spanning tree.",
      "Le dispositif FortiGate transmet les messages spanning tree reçus.",
      "Des boucles de la couche 2 d'Ethernet sont susceptibles de se produire.",
      "Le FortiGate génère des trames BPDU de spanning tree."
    ],
    BR: [1]
  },
  {
    Q: "Parmi les affirmations suivantes, quelles sont les différences correctes entre le mode NAT/route et le mode transparent ? (Choisissez-en deux.)",
    R: [
      "En mode transparent, les interfaces n'ont pas d'adresse IP.",
      "Les polices de pare-feu ne sont utilisées qu'en mode NAT/route.",
      "Les routeurs statiques ne sont utilisés qu'en mode NAT/route.",
      "Seul le mode transparent permet l'inspection du trafic en ligne au niveau de la couche 2."
    ],
    BR: [0, 2]
  },
  {
    Q: "Laquelle des affirmations suivantes est vraie concernant un dispositif FortiGate fonctionnant en mode transparent ? (Choisissez-en trois.)",
    R: [
      "Il agit comme un pont de couche 2",
      "Il agit comme un routeur de niveau 3",
      "Il transmet les trames en utilisant l'adresse MAC de destination.",
      "Il transmet les paquets en utilisant l'adresse IP de destination.",
      "Il peut effectuer une inspection du contenu (antivirus, filtrage web, etc.)"
    ],
    BR: [0, 2, 4]
  },
  {
    Q: "Examinez la topologie du réseau. La station de travail 172.16.1.1/24 se connecte au port2 du FortiGate, et le routeur du FAI 172.16.1.2 se connecte au port1. Sans modifier l'adressage IP, quels changements de configuration sont nécessaires ? (Choisissez-en deux)",
    R: [
      "Au moins une politique de pare-feu du port2 au port1 pour autoriser le trafic sortant.",
      "Une route par défaut configurée dans les dispositifs FortiGuard pointant vers le routeur du FAI.",
      "Adresses IP statiques ou dynamiques dans les deux interfaces FortiGate port1 et port2.",
      "Les dispositifs FortiGate configurés en mode transparent."
    ],
    BR: [0, 3]
  },
  {
    Q: "Lesquelles des affirmations suivantes sont correctes concernant les domaines de diffusion de couche 2 dans les VDOM en mode transparent ? (Choisissez-en deux)",
    R: [
      "L'ensemble du VDOM est un domaine de diffusion unique, même lorsque plusieurs VLAN sont utilisés.",
      "Chaque VLAN est un domaine de diffusion distinct.",
      "Les interfaces configurées avec le même ID VLAN peuvent appartenir à des domaines de diffusion différents.",
      "Toutes les interfaces du même domaine de diffusion doivent utiliser le même ID de VLAN."
    ],
    BR: [1, 2]
  },
  {
    Q: "Laquelle des affirmations suivantes est correcte concernant les interfaces FortiGate et le protocole spanning tree ? (Choisissez-en deux)",
    R: [
      "Seules les interfaces du commutateur FortiGate participent à l'arbre de spanning.",
      "Les interfaces AII FortiGate dans les VDOMs en mode transparent participent au spanning tree.",
      "Toutes les interfaces FortiGate en mode NAT/route VDOMs Participent au spanning tree.",
      "Toutes les interfaces FortiGate dans les VDOMs en mode transparent peuvent bloquer ou transmettre les BPDUs."
    ],
    BR: [1, 3]
  },
  {
    Q: "Lequel des énoncés suivants décrit correctement le fonctionnement d'une unité FortiGate en mode Transparent ?",
    R: [
      "Pour gérer l'unité FortiGate, l'une des interfaces doit être désignée comme interface de gestion. Cette interface ne doit pas être utilisée pour le transfert de données.",
      "Une adresse IP est utilisée pour gérer l'unité FortiGate mais cette adresse IP n'est pas associée à une interface spécifique.",
      "L'unité FortiGate doit utiliser des adresses IP publiques sur les réseaux interne et externe.",
      "L'unité FortiGate utilise des adresses IP privées sur le réseau interne mais les cache en utilisant la traduction d'adresse."
    ],
    BR: [1]
  },
  {
    Q: "Quelle fonction de FortiGate peut être utilisée pour bloquer un balayage ping d'un attaquant ?",
    R: [
      "Pare-feu d'application Web (WAF)",
      "Signatures IPS basées sur le taux",
      "Renifleur à un bras",
      "Politiques de DoS"
    ],
    BR: [3]
  },
  {
    Q: "Votre serveur de messagerie Linux fonctionne sur un numéro de port non standard, le port 2525. Quelle affirmation est vraie ?",
    R: [
      "IPS ne peut pas analyser ce trafic pour des anomalies SMTP à cause du numéro de port non standard. Vous devez reconfigurer le serveur pour qu'il fonctionne sur le port 2.",
      "Pour appliquer l'IPS au trafic vers ce serveur, vous devez configurer le proxy SMTP de FortiGate pour qu'il écoute sur le port 2525.",
      "IPS appliquera toutes les signatures SMTP, qu'elles s'appliquent aux clients ou aux serveurs.",
      "Les décodeurs de protocole détectent automatiquement le SMTP et recherchent les correspondances avec la signature IPS appropriée."
    ],
    BR: [3]
  },
  {
    Q: "Examinez le message de journal suivant pour IPS et identifiez les réponses valides ci-dessous. (Sélectionnez toutes les réponses qui s'appliquent.)",
    R: [
      "La cible est 192.168.3.168.",
      "La cible est 192.168.3.170.",
      "L'attaque a été détectée et bloquée.",
      "L'attaque a été détectée seulement",
      "L'attaque était basée sur le protocole TCP."
    ],
    BR: [1, 3]
  },
  {
    Q: "Identifiez l'énoncé qui décrit correctement la sortie de la commande suivante : diagnose ips anomaly list",
    R: [
      "Liste la politique DoS configurée.",
      "Liste les compteurs en temps réel pour la politique DoS configurée.",
      "Liste des erreurs capturées lors de la compilation de la politique DoS.",
      "Liste les correspondances des signatures IPS."
    ],
    BR: [1]
  },
  {
    Q: "Examinez la configuration du filtre du capteur IPS ; quelles sont les affirmations correctes concernant le filtre ? (Choisissez-en deux.)",
    R: [
      "Il n'enregistre pas les attaques visant les serveurs Linux.",
      "Il correspond à tout le trafic vers les serveurs Linux.",
      "Son action bloquera le trafic correspondant à ces signatures.",
      "Il ne prend effet que lorsque le capteur est appliqué à une police."
    ],
    BR: [2, 3]
  },
  {
    Q: "Par défaut, le système de protection contre les intrusions (IPS) d'une unité FortiGate est configuré pour effectuer quelle action ?",
    R: [
      "Bloquer toutes les attaques du réseau.",
      "Bloquer les attaques réseau les plus courantes.",
      "Autorise tout le trafic",
      "Autoriser et enregistrer tout le trafic"
    ],
    BR: [2]
  },
  {
    Q: "Dans lequel des modèles de rapport suivants devez-vous configurer les graphiques à inclure dans le rapport ?",
    R: [
      "Modèle de mise en page",
      "Modèle de filtre de données",
      "Modèle de sortie",
      "Modèle d'horaire"
    ],
    BR: [0]
  },
  {
    Q: "Un administrateur examine les journaux d'attaques et remarque une entrée IPS. D'après les informations affichées, lesquelles des affirmations suivantes sont correctes ? (Cochez toutes les réponses qui s'appliquent.)",
    R: [
      "C'est une attaque du serveur HTTP.",
      "L'attaque a été détectée et bloquée par l'unité FortiGate.",
      "L'attaque visait une unité FortiGate à l'adresse IP 192.168.1.100.",
      "L'attaque a été détectée et passée par l'unité FortiGate"
    ],
    BR: [2, 3]
  },
  {
    Q: "Examinez la configuration CLI ci-dessous pour un capteur IPS et identifiez les affirmations correctes. (Sélectionnez toutes les réponses qui s'appliquent.)",
    R: [
      "Le capteur enregistrera toutes les attaques de serveurs pour tous les systèmes d'exploitation.",
      "Le capteur inclura un fichier PCAP avec une trace des paquets correspondants dans le message de journal de toute signature correspondante.",
      "Le capteur correspondra à tout le trafic provenant de l'objet d'adresse 'LINUX_SERVER'.",
      "Le capteur réinitialisera toutes les connexions qui correspondent à ces signatures.",
      "Le capteur filtre uniquement les signatures IPS à appliquer à la politique de pare-feu sélectionnée."
    ],
    BR: [1, 4]
  },
  {
    Q: "Laquelle des propositions suivantes décrit la meilleure signature personnalisée pour détecter l'utilisation du mot \"Fortinet\" dans les applications de chat ?",
    R: [
      "F-SBID(--protocol tcp ; --flow from_client ; --pattern \"X-MMS-IM-Format\" ; --pattern \"fortinet\", --no_case ;)",
      "F-SBID(--protocole tcp ; --flow from_client ; --pattern \"fortinet\" ; --no_case ;)",
      "F-SBID(--protocole tcp ; --flow from_client ; --pattern \"X-MMS-IM-Format\", : --pattern \"fortinet\", --within 20 ; --no_case ;)",
      "F-SBID(--protocole tcp ; --flow from_client ; --pattern \"X-MMS-IM-Format\" ; --pattern \"fortinet\", --within 20 ;)"
    ],
    BR: [0]
  },
  {
    Q: "Lequel des modèles de rapport suivants doit être utilisé lors de la planification de la génération de rapports ?",
    R: [
      "Modèle de mise en page",
      "Modèle de filtre de données",
      "Modèle de sortie",
      "Modèle de graphique"
    ],
    BR: [0]
  },
  {
    Q: "Lesquelles décrivent le mieux le mécanisme d'une inondation TCP SYN ?",
    R: [
      "L'attaquant maintient ouvertes de nombreuses connexions avec une transmission lente des données, de sorte que les autres clients ne peuvent pas établir de nouvelles connexions.",
      "L'attaquant envoie un paquet conçu pour se \"synchroniser\" avec le FortiGate.",
      "L'attaquant envoie un paquet malformé spécialement conçu, destiné à faire tomber la cible en faisant exploser son analyseur syntaxique.",
      "L'attaquant commence de nombreuses connexions, mais ne reconnaît jamais les former complètement."
    ],
    BR: [3]
  },
  {
    Q: "Acme Web Hosting remplace l'un de ses pare-feu par un FortiGate. Il doit être capable d'appliquer le transfert de port à ses serveurs Web dorsaux tout en bloquant les téléchargements de virus et les inondations TCP SYN des attaquants. Quel mode de fonctionnement est le meilleur choix ?",
    R: [
      "NAT/route",
      "Mode NAT avec une interface en mode renifleur à un bras",
      "Mode transparent",
      "Il n'existe pas de mode de fonctionnement approprié"
    ],
    BR: [0]
  },
  {
    Q: "Quelle affirmation est correcte concernant la création d'une signature personnalisée ?",
    R: [
      "Il doit commencer par le nom",
      "Il doit indiquer si le flux de trafic provient du client ou du serveur.",
      "Il doit spécifier le protocole. Sinon, elle pourrait accidentellement correspondre à des protocoles de couche inférieure.",
      "Il n'est pas pris en charge par le support technique de Fortinet."
    ],
    BR: [3]
  },
  {
    Q: "Quelle vulnérabilité du système d'exploitation pouvez-vous protéger lors de la sélection des signatures à inclure dans un capteur IPS ? (Choisissez-en trois)",
    R: [
      "Irix",
      "ONIX",
      "Linux",
      "Mac OS",
      "BSD"
    ],
    BR: [2, 3, 4]
  },
  {
    Q: "Quelle affirmation concernant l'IPS est fausse ?",
    R: [
      "Les paquets IPS contiennent un moteur et des signatures utilisés à la fois par IPS et d'autres scans basés sur le flux.",
      "La topologie à un bras avec le mode renifleur améliore les performances de blocage de l'IPS.",
      "IPS peut détecter les attaques de type \"zero-day\".",
      "Le statut de la dernière tentative de mise à jour de service de FortiGuard IPS est indiqué sur System>Config>FortiGuard et dans la sortie de 'diag autoupdate version'."
    ],
    BR: [1]
  },
  {
    Q: "Lequel des énoncés suivants est correct en ce qui concerne la fonction de quarantaine NAC ?",
    R: [
      "Avec la quarantaine NAC, les fichiers peuvent être mis en quarantaine non seulement à la suite d'une analyse antivirus, mais aussi pour d'autres formes d'inspection du contenu telles que IPS et DLP.",
      "La quarantaine NAC effectue un contrôle client sur les postes de travail avant qu'ils ne soient autorisés à avoir un accès administratif à FortiGate.",
      "La quarantaine NAC permet aux administrateurs d'isoler les clients dont l'activité sur le réseau présente un risque pour la sécurité.",
      "Si vous avez choisi l'action de quarantaine, vous devez décider si le type de quarantaine est une quarantaine NAC ou une quarantaine de fichiers."
    ],
    BR: [2]
  },
  {
    Q: "Une organisation souhaite protéger son serveur SIP contre les attaques par inondation d'appels. Parmi les modifications de configuration suivantes, lesquelles peuvent être effectuées sur le serveur FortiGate ?",
    R: [
      "Appliquer une liste de contrôle d'application qui contient une règle pour SIP et dont l'option \"Limiter les demandes INVITE\" est configurée.",
      "Activez la mise en forme du trafic pour la politique de pare-feu SIP appropriée.",
      "Réduisez la valeur du temps de survie de la session pour le protocole SIP en exécutant la commande CLI configure system session-ttl.",
      "Exécutez la commande CLI set udp-idle-timer et définissez une valeur de temps inférieure."
    ],
    BR: [0]
  },
  {
    Q: "Sur votre FortiGate 60D, vous avez configuré des politiques de pare-feu qui transfèrent le trafic vers votre serveur web Linux Apache. Sélectionnez la meilleure façon de protéger votre serveur web en utilisant le moteur IPS.",
    R: [
      "Activer les signatures IPS pour les serveurs Linux avec les protocoles HTTP, TCP et SSL et les applications Apache. Configuré DLP pour bloquer les requêtes HTTP GET avec les numéros de cartes de crédit.",
      "Activer les signatures IPS pour les serveurs Linux avec les protocoles HIT, TCP et SSL et les applications Apache. Configurez DLP pour bloquer HTTP GET avec des numéros de carte de crédit. Configurez également une politique Dos pour empêcher les floods TCP SYn et les scans de port.",
      "Aucun. Le FortiGate 60D est un modèle de bureau, qui ne prend pas en charge l'IPS.",
      "Activez les signatures IPS pour les serveurs Linux et Windows avec les protocoles FTP, HTTP, TCP, et SSL et les applications Apache et PHP."
    ],
    BR: [3]
  },
  {
    Q: "Une administration souhaite limiter le volume total de sessions SMTP sur son serveur de messagerie. Lequel des capteurs DoS suivants peut être utilisé à cette fin ?",
    R: [
      "top port_scan",
      "ip dst session",
      "udp_flood",
      "ip_src_session"
    ],
    BR: [1]
  },
  {
    Q: "Quels sont les changements apportés à IPS qui réduiront l'utilisation des ressources et amélioreront les performances ? (Choisissez-en trois)",
    R: [
      "Dans la signature personnalisée, supprimez les mots-clés inutiles afin de réduire la longueur de l'arborescence de la signature que FortiGate doit comparer pour déterminer si le paquet est conforme.",
      "Dans les capteurs IPS, désactivez les signatures et les statistiques basées sur le taux (détection des anomalies) pour les protocoles, les applications et les directions de trafic qui ne sont pas pertinents.",
      "Dans les filtres IPS, passez de \"Advanced\" à \"Basic\" pour n'appliquer que les signatures les plus essentielles.",
      "Dans les politiques de pare-feu où l'IPS n'est pas nécessaire, désactivez l'IPS.",
      "Dans les politiques de pare-feu où IPS est utilisé, activez les journaux de début de session."
    ],
    BR: [0, 1, 3]
  },
  {
    Q: "Quel profil le moteur IPS peut-il utiliser sur une interface qui est en mode renifleur ? (Choisissez-en trois)",
    R: [
      "Antivirus (basé sur le flux)",
      "Filtrage du Web (basé sur la PROXY)",
      "Protection contre les intrusions",
      "Contrôle des applications",
      "Contrôle des points de terminaison"
    ],
    BR: [0, 1, 3]
  },
  {
    Q: "Vous créez une signature personnalisée. Laquelle a une syntaxe incorrecte ?",
    R: [
      "F-SBID(--attack_id 1842,--name \"Ping.Mort\";--protocole imp ; --data_size>32000 ;",
      "F-SBID(--name \"Block.SMTP.VRFY.CMD\",-pattern \"Vrfy\" - service SMTP ; --no_case;-contex header ;",
      "F-SBID(--name \"Ping.Death\";-protocol icmp;--data_size>32000 ;)",
      "F-SBID(--name \"Block\".HTTP.POST\" ; --protocol tcp;-- service HTTP;-- flow from_client, -pattern 'POST' ; -- context uri;--within 5, context ;)"
    ],
    BR: [0]
  },
  {
    Q: "Un administrateur a créé une signature IPS personnalisée. Où la signature IPS personnalisée doit-elle être appliquée ?",
    R: [
      "Dans un capteur IPS",
      "Dans une interface.",
      "Dans une politique de DoS.",
      "Dans un profil de contrôle d'application."
    ],
    BR: [0]
  },
  {
    Q: "Lequel des processus suivants est impliqué dans la mise à jour de l'IPS de FortiGuard ?",
    R: [
      "Les demandes de mise à jour du FortiGate IPS sont envoyées en utilisant le port UDP 443.",
      "Les demandes de mise à jour du décodeur de protocole sont envoyées à service.fortiguard.net.",
      "Les demandes de mise à jour des signatures IPS sont envoyées à update.fortiguard.net.",
      "Les mises à jour du moteur IPS ne peuvent être obtenues qu'en utilisant les mises à jour push."
    ],
    BR: [2]
  },
  {
    Q: "Examinez la configuration du capteur IPS WINDOS_SERVERS. Après avoir appliqué le capteur IPS, FortiGate ne génère toujours pas de journaux IPS pour le trafic HTTPS. Quelle est la raison possible de ce phénomène ?",
    R: [
      "Le filtre IPS n'a pas l'option Protocol : HTTPS.",
      "Les signatures HTTPS n'ont pas été ajoutées au capteur.",
      "Une politique DoS devrait être utilisée, au lieu d'un capteur IPS.",
      "Une politique DoS devrait être utilisée, au lieu d'un capteur IPS.",
      "La politique de pare-feu n'utilise pas un profil d'inspection SSL complet."
    ],
    BR: [4]
  },
  {
    Q: "Quels types de trafic et d'attaques peuvent être bloqués par un profil de pare-feu d'application Web (WAF) ? (Choisissez-en trois.)",
    R: [
      "Trafic vers les serveurs de botnets",
      "Trafic vers des sites web inappropriés",
      "Attaques de divulgation d'informations sur les serveurs",
      "Fuites de données de cartes de crédit",
      "Attaques par injection SQL"
    ],
    BR: [0, 2, 3]
  },
  {
    Q: "Vous configurez le FortiGate racine pour mettre en œuvre la structure de sécurité, et configurez le port 10 pour communiquer avec un FortiGate en aval. Lors de la configuration du FortiGate racine pour communiquer avec un FortiGate en aval, quels paramètres doivent être configurés ? (Choisissez-en deux.)",
    R: [
      "Détection du dispositif activée.",
      "Accès administratif : FortiTelemetry.",
      "IP/Masque de réseau.",
      "Rôle : Sécurité Fabric."
    ],
    BR: [1, 2]
  },
  {
    Q: "Quelle affirmation décrit le mieux la tâche principale des processeurs d'accélération matérielle de FortiGate ?",
    R: [
      "Décharger les tâches de traitement du trafic de l'unité centrale principale.",
      "Décharger les tâches de gestion de l'unité centrale principale.",
      "Compresser et optimiser le trafic réseau.",
      "Augmenter la bande passante maximale disponible dans une interface FortiGate."
    ],
    BR: [0]
  },
  {
    Q: "Quelle affirmation décrit le mieux l'objectif de la fonction de proxy SYN disponible dans les processeurs SP ?",
    R: [
      "Accélérer la poignée de main tridimensionnelle de TCP",
      "Collecter des statistiques sur les sessions de trafic",
      "Analyser le paquet SYN pour décider si la nouvelle session peut être transférée au processeur SP.",
      "Protection contre les attaques SYN flood."
    ],
    BR: [3]
  },
  {
    Q: "Pour les dispositifs FortiGate équipés de puces Network Processor (NP), quelles sont les réponses vraies ? (Choisissez-en trois.)",
    R: [
      "Pour chaque nouvelle session IP, le premier paquet va toujours à l'unité centrale.",
      "Le noyau n'a pas besoin de programmer la NPU. Lorsque le NPU voit le trafic, il détermine lui-même s'il peut le traiter.",
      "Une fois déchargé, sauf en cas d'erreur, le NP transmet tous les paquets suivants. L'unité centrale ne les traite pas.",
      "Lorsque le dernier paquet est envoyé ou reçu, tel qu'un signal TCP FIN ou TCP RST, le NP renvoie cette session à l'unité centrale pour qu'elle soit détruite.",
      "Les sessions des politiques pour lesquelles un profil de sécurité est activé peuvent être déchargées par NP."
    ],
    BR: [0, 2, 3]
  },
  {
    Q: "Deux unités FortiGate avec des processeurs NP6 forment un cluster actif-actif. Le cluster effectue une inspection du profil de sécurité (UTM) sur tout le trafic utilisateur. Quelles sont les affirmations vraies concernant les sessions que l'unité maître délègue à l'unité esclave pour inspection ? (Choisissez-en deux.)",
    R: [
      "Ils sont déchargés sur le NP6 dans l'unité maître.",
      "Ils ne sont pas déchargés sur le NP6 dans l'unité maître.",
      "Ils sont déchargés sur le NP6 dans l'unité esclave.",
      "Elles ne sont pas déchargées sur le NP de l'unité esclave."
    ],
    BR: [1, 2]
  },
  {
    Q: "Lequel des accélérateurs matériels Fortinet suivants peut être utilisé pour décharger l'inspection antivirus basée sur les flux ? (Choisissez-en deux.)",
    R: [
      "SP3",
      "CP8",
      "NP4",
      "NP6"
    ],
    BR: [0, 1]
  },
  {
    Q: "Quelles fonctions d'inspection du trafic peuvent être exécutées par un processeur de sécurité (SP) ? (Choisissez-en trois.)",
    R: [
      "proxy TCP SYN",
      "Aide à la session SIP",
      "Antivirus basé sur un proxy",
      "Correspondance des signatures d'attaque",
      "Filtrage web basé sur le flux"
    ],
    BR: [0, 3, 4]
  },
  {
    Q: "Un administrateur utilise le renifleur intégré de FortiGate pour capturer le trafic HTTP entre un client et un serveur. Cependant, la sortie du renifleur ne montre que les paquets liés à l'établissement et à la déconnexion des sessions TCP. Pourquoi ?",
    R: [
      "L'administrateur fait tourner le renifleur sur l'interface interne uniquement.",
      "Le filtre utilisé dans le renifleur ne correspond au trafic que dans une seule direction.",
      "Le FortiGate effectue une inspection du contenu.",
      "Le trafic TCP est déchargé sur un NP6."
    ],
    BR: [3]
  },
  {
    Q: "Parmi les énoncés suivants, lesquels décrivent le mieux les principales exigences pour qu'une session de trafic soit éligible au délestage vers un processeur NP6 ? (Choisissez-en trois.)",
    R: [
      "Les paquets de session n'ont PAS de balise VLAN 802.1Q.",
      "Il ne s'agit PAS de trafic multicast.",
      "Il ne nécessite PAS d'inspection par proxy",
      "Le protocole de la couche 4 doit être UP, TCP, SCTP ou ICMP,",
      "Il ne nécessite PAS d'inspection basée sur le flux."
    ],
    BR: [2, 3, 4]
  },
  {
    Q: "Quelle affirmation décrit le mieux ce qu'est un système sur puce (SoC) Fortinet ?",
    R: [
      "Puce à faible consommation qui fournit une puissance de traitement d'usage général.",
      "Une puce qui combine la puissance de traitement générale avec la technologie ASIC personnalisée de Fortinet.",
      "Puce version allégée (avec moins de fonctionnalités) d'un processeur SP",
      "Puce version légère (avec moins de fonctionnalités) d'un processeur CP"
    ],
    BR: [1]
  },
  {
    Q: "Lesquelles des affirmations suivantes sont vraies concernant le trafic accéléré par un processeur NP ? (Choisissez-en deux.)",
    R: [
      "Les paquets TCP SYN sont toujours traités par le processeur NP.",
      "Les paquets initiaux sont envoyés au processeur NP, où une décision est prise pour savoir si la session peut être déchargée ou non.",
      "Les paquets pour une terminaison de session sont toujours traités par le CPU.",
      "Les paquets initiaux vont à l'unité centrale, où une décision est prise pour savoir si la session peut être déchargée ou non."
    ],
    BR: [0, 3]
  },
  {
    Q: "Quelle est l'une des conditions à remplir pour décharger le chiffrement et le déchiffrement du trafic IPsec sur un processeur NP6 ?",
    R: [
      "aucun profil de protection ne peut être appliqué sur le trafic IPsec.",
      "L'anti-répétition de phase 2 doit être désactivée.",
      "La phase 2 doit avoir un algorithme de cryptage supporté par le NP6.",
      "Le trafic IPsec ne doit pas être inspecté par un assistant de session FortiGate."
    ],
    BR: [2]
  },
  {
    Q: "Quelle affirmation décrit le mieux l'objectif de la fonction de proxy SYN disponible dans les processeurs SP ?",
    R: [
      "Accélérer la poignée de main tridimensionnelle de TCP",
      "Collecter des statistiques sur les sessions de trafic",
      "Analyser le paquet SYN pour décider si la nouvelle session peut être transférée au processeur SP.",
      "Protéger contre les attaques SYN flood."
    ],
    BR: [3]
  },
  {
    Q: "Parmi les fonctions de mise en forme du trafic suivantes, lesquelles peuvent être déchargées sur un processeur NP ? (Choisissez-en deux.)",
    R: [
      "Priorité aux quais",
      "Plafonnement du trafic (limite de la bande passante)",
      "Services différenciés - réécriture sur le terrain",
      "Garantie de la bande passante"
    ],
    BR: [2, 3]
  },
  {
    Q: "Quelle affirmation décrit le mieux ce qu'est un système sur puce (SoC) Fortinet ?",
    R: [
      "Puce à faible consommation qui fournit une puissance de traitement d'usage général.",
      "Une puce qui combine la puissance de traitement générale avec la technologie ASIC personnalisée de Fortinet.",
      "Puce version allégée (avec moins de fonctionnalités) d'un processeur SP",
      "Puce version légère (avec moins de fonctionnalités) d'un processeur CP"
    ],
    BR: [1]
  },
  {
    Q: "Quelles sont les affirmations vraies concernant le déchargement de l'inspection antivirus vers un processeur de sécurité (SP) ? (Choisissez-en deux.)",
    R: [
      "L'inspection basée sur le proxy et l'inspection basée sur le flux sont toutes deux prises en charge.",
      "Un message de remplacement ne peut pas être présenté aux utilisateurs lorsqu'un virus a été détecté.",
      "Il permet d'économiser les ressources du processeur,",
      "Les interfaces d'entrée et de sortie peuvent se trouver dans des SP différents."
    ],
    BR: [1, 2]
  },
  {
    Q: "Quels paquets IP peuvent être accélérés matériellement par un processeur NP6 ? (Choisissez-en deux.)",
    R: [
      "Paquets fragmentés.",
      "Paquet multicast.",
      "Paquet SCTP.",
      "Paquet GRE."
    ],
    BR: [1, 2]
  },
  {
    Q: "Lesquelles des affirmations suivantes sont vraies concernant l'équilibrage de la charge des liaisons WAN ? (Choisissez-en deux).",
    R: [
      "Il ne peut y avoir qu'un seul lien WAN virtuel par VDOM.",
      "FortiGate peut mesurer la qualité de chaque lien en fonction de la latence, de la gigue ou du pourcentage de paquets.",
      "Les vérifications de l'état des liaisons peuvent être effectuées sur chaque membre de la liaison si l'interface WAN virtuelle.",
      "Les valeurs de distance et de priorité sont configurées dans chaque membre de la liaison si l'interface WAN virtuelle"
    ],
    BR: [0, 2]
  },
  {
    Q: "Lors de l'utilisation de SD-WAN, comment configurer l'adresse de passerelle du prochain saut pour une interface membre afin que FortiGate puisse transférer le trafic Internet ?",
    R: [
      "Il doit être configuré dans une route statique en utilisant l'interface virtuelle swan.",
      "Il doit être fourni dans la configuration de l'interface membre du SD-WAN.",
      "Il doit être configuré dans un policy-route en utilisant l'interface virtuelle swan.",
      "Il doit être appris automatiquement par un protocole de routage dynamique."
    ],
    BR: [1]
  },
  {
    Q: "Examinez cette sortie d'un flux de débogage. Quelles sont les affirmations correctes concernant la sortie ? (Choisissez-en deux.)",
    R: [
      "Le paquet a été autorisé par la politique du pare-feu avec l'ID 00007fcO.",
      "La FortiGate a acheminé le paquet par le port3.",
      "FortiGate a reçu un paquet TCP SYN/ACK.",
      "L'adresse IP source du paquet a été traduite en 10.0.1.10."
    ],
    BR: [1, 3]
  },
  {
    Q: "Visualisez la pièce à conviction. Pourquoi l'administrateur obtient-il l'erreur montrée dans la pièce jointe ?",
    R: [
      "L'administrateur admin ne dispose pas des privilèges nécessaires pour configurer les paramètres globaux.",
      "Les paramètres globaux ne peuvent pas être configurés à partir du contexte du VDOM racine.",
      "La commande config system global n'existe pas dans FortiGate.",
      "L'administrateur doit d'abord entrer la commande edit global"
    ],
    BR: [1]
  },
  {
    Q: "Dans quels états du processus est-il impossible d'interrompre un processus ? (Choisissez)",
    R: [
      "S-Sleep",
      "R-Running",
      "D-Sommeil ininterrompu",
      "Z-Zombie"
    ],
    BR: [2]
  },
  {
    Q: "Examinez la sortie suivante de la commande diagnose sys session list. Quelles sont les affirmations vraies concernant la session ci-dessus ? (Choisissez-en deux.)",
    R: [
      "Le Time-To-Live (TTL) de la session a été configuré à 9 secondes.",
      "La FortiGate effectue la NAT des adresses IP source et destination sur tous les paquets provenant de l'adresse 192.168.1.110.",
      "L'adresse IP 192.168.1.110 est traduite en 172.17.87.16.",
      "Le FortiGate ne traduit pas les numéros de port TCP des paquets de cette session."
    ],
    BR: [2, 3]
  },
  {
    Q: "La pièce à conviction montre une partie de la sortie de la commande 'diagnose debug application ike 255', prise pendant l'établissement d'un VPN. Laquelle des affirmations suivantes est correcte concernant cette sortie ? (Choisissez-en deux)",
    R: [
      "Les sélecteurs de mode rapide négociés entre les deux pairs VPN IPsec sont 0.0.0.0/32 pour les adresses source et destination.",
      "La sortie correspond à une négociation de phase 2",
      "NAT-T activé et il y a un troisième dispositif sur le chemin qui effectue le NAT du trafic entre les deux peers VPN IPsec.",
      "L'adresse IP du peer VPN IPsec distant est 172.20.187.114"
    ],
    BR: [2, 3]
  },
  {
    Q: "Un administrateur réseau connecte son PC à l'interface INTERNAL d'une unité FortiGate. L'administrateur tente d'établir une connexion HTTPS avec l'unité FortiGate sur l'interface VLAN1 à l'adresse IP de 10.0.1.1, mais n'obtient aucune connectivité. D'après les résultats des commandes de dépannage, laquelle des explications suivantes est une cause possible du problème ?",
    R: [
      "L'unité Fortigate n'a pas de route de retour vers le PC.",
      "Le PC a une adresse IP dans le mauvais sous-réseau.",
      "Le PC utilise une adresse IP de passerelle par défaut incorrecte.",
      "Le service HTTPS n'est pas configuré sur l'interface VLAN1 de l'unité FortiGate.",
      "Il n'y a pas de politique de pare-feu permettant le trafic de INTERNAL-> VLAN1"
    ],
    BR: [3]
  },
  {
    Q: "Quelles sont les sorties de la commande 'diagnose hardware deviceinfo nic' ? (Choisissez-en deux.)",
    R: [
      "Cache ARP",
      "Adresse MAC physique",
      "Erreurs et collisions",
      "Ports TCP à l'écoute"
    ],
    BR: [1, 2]
  },
  {
    Q: "Quels sont les exemples de syntaxe correcte pour la commande de diagnostic des tables de session ? (Choisissez-en deux.)",
    R: [
      "di diagnose s sys filtre de session clair",
      "diagnose sys session sc 10.0.1.254",
      "diagnostiquer le filtre de session sys",
      "diagnostiquer sys session filter list dst."
    ],
    BR: [0, 2]
  },
  {
    Q: "La commande diag sys session list est exécutée dans l'interface CLI. D'après le résultat de cette commande, laquelle des affirmations suivantes est correcte ?",
    R: [
      "Il s'agit d'une session UDP.",
      "La mise en forme du trafic est appliquée à cette session.",
      "Il s'agit d'une session ICMP",
      "Ce trafic a été authentifié.",
      "Cette session correspond à une politique de pare-feu avec l'ID 5."
    ],
    BR: [1]
  },
  {
    Q: "Dans la sortie de la commande de débogage, lequel des éléments suivants décrit le mieux l'adresse MAC 00:09:0:69:03:7e ?",
    R: [
      "C'est l'une des adresses MAC secondaires de l'interface port1.",
      "Il s'agit de l'adresse MAC primaire de l'interface du port.",
      "Il s'agit de l'adresse MAC d'un autre périphérique réseau situé dans le même segment de réseau local que l'interface du port 1 de l'unité FortiGate.",
      "Il s'agit de l'adresse MAC virtuelle HA."
    ],
    BR: [2]
  },
  {
    Q: "Regardez la pièce à conviction. Le client ne peut pas se connecter au serveur Web HTTP. L'administrateur exécute le renifleur intégré de FortiGate et obtient un résultat montrant des paquets SYN répétés. Que faut-il faire ensuite pour résoudre le problème ?",
    R: [
      "Exécutez un autre sniffer dans le FortiGate, cette fois-ci avec le filtre \"host 10.0.1.10\".",
      "Lancez un sniffer dans le serveur web.",
      "Capturez le trafic en utilisant un renifleur externe connecté au port 1.",
      "Exécuter un flux de débogage."
    ],
    BR: [3]
  },
  {
    Q: "Examinez cette sortie de la commande diagnose sys top. Quelles affirmations concernant la sortie sont vraies ? (Choisissez-en deux.)",
    R: [
      "sshd est le processus qui consomme le plus de mémoire",
      "ssh est le processus qui consomme le plus de CPU",
      "Tous les processus listés sont en état de sommeil",
      "Le processus ssh utilise 123 pages de mémoire."
    ],
    BR: [1, 2]
  },
  {
    Q: "Un administrateur utilise le renifleur intégré de FortiGate pour capturer le trafic HTTP entre un client et un serveur. Cependant, la sortie du renifleur ne montre que les paquets liés à l'établissement et à la déconnexion des sessions TCP. Pourquoi ?",
    R: [
      "L'administrateur fait tourner le renifleur sur l'interface interne uniquement.",
      "Le filtre utilisé dans le renifleur ne correspond au trafic que dans une seule direction.",
      "Le FortiGate fait une inspection du contenu",
      "Le trafic TCP est déchargé sur un NP6."
    ],
    BR: [3]
  },
  {
    Q: "Examinez la sortie des diagnostics IPsec de la commande diagnose vpn tunnel list. Quelles sont les affirmations correctes concernant cette sortie ? (Choisissez-en deux.)",
    R: [
      "L'adresse 172.20.1.1 a été attribuée au client qui se connecte.",
      "Dans les paramètres de la phase 1, la détection des pairs morts est activée. Le tunnel est inactif.",
      "Le tunnel est inactif.",
      "L'adresse 10.200.3.1 a été attribuée au client qui se connecte."
    ],
    BR: [0, 1]
  },
  {
    Q: "Quels sont les composants de la FortiGate qui sont testés lors du test matériel ? (Choisissez-en trois.)",
    R: [
      "Accès administratif",
      "Battement de cœur HA",
      "CPU",
      "Disque dur",
      "Interfaces réseau"
    ],
    BR: [2, 3, 4]
  },
  {
    Q: "Examinez cette sortie d'un flux de débogage. Pourquoi le FortiGate a-t-il laissé tomber le paquet ?",
    R: [
      "L'adresse IP du prochain saut est inaccessible.",
      "Il a échoué à la vérification RPF.",
      "Il correspondait à une politique de pare-feu explicitement configurée avec l'action DENY.",
      "Il correspondait à la politique implicite du pare-feu par défaut."
    ],
    BR: [3]
  },
  {
    Q: "Examinez la pièce à conviction, qui contient une sortie de diagnostic de session. Laquelle des affirmations suivantes concernant la sortie de diagnostic de la session est vraie ?",
    R: [
      "La session est dans l'état ESTABLISHED.",
      "La session est en état LISTEN.",
      "La session est en état d'ATTENTE DE TEMPS.",
      "La session est en état d'ATTENTE FERMEE."
    ],
    BR: [0]
  },
  {
    Q: "Lesquelles des affirmations suivantes concernant la sauvegarde des journaux à partir de l'interface CLI et le téléchargement des journaux à partir de l'interface graphique sont vraies ? (Choisissez-en deux.)",
    R: [
      "Les téléchargements de journaux à partir de l'interface graphique sont limités à la vue du filtre en cours.",
      "Les sauvegardes de journaux effectuées à partir de l'interface CLI ne peuvent pas être restaurées sur un autre FortiGate.",
      "Les sauvegardes de journaux à partir de l'interface CLI peuvent être configurées pour être téléchargées sur FTP à une heure programmée.",
      "Les téléchargements de journaux depuis l'interface graphique sont stockés dans des fichiers compressés LZ4."
    ],
    BR: [0, 1]
  },
  {
    Q: "Quelles commandes sont appropriées pour enquêter sur les CPU élevées ? (Choisissez-en deux.) (496)",
    R: [
      "diag sys top",
      "diag hardware s sysinfo mem",
      "diag debug flow",
      "obtenir l'état des performances du système"
    ],
    BR: [0, 3]
  },
  {
    Q: "Dans le journal d'un Crash, qu'indique un statut de 0 ?",
    R: [
      "Arrêt anormal d'un processus",
      "Un processus fermé pour une raison quelconque",
      "Le processus Scanunitd s'est écrasé",
      "Arrêt normal sans anomalie",
      "Le processus DHCP s'est planté"
    ],
    BR: [3]
  },
  {
    Q: "Examinez la pièce à conviction, qui montre la sortie partielle d'un débogage IKE en temps réel. Laquelle des affirmations suivantes concernant la sortie est vraie ?",
    R: [
      "Le VPN est configuré pour utiliser l'authentification par clé pré-partagée.",
      "L'authentification étendue (XAuth) a réussi.",
      "Remote est le nom d'hôte de l'homologue IPsec distant.",
      "La phase 1 est tombée."
    ],
    BR: [0]
  },
  {
    Q: "Quelle affirmation décrit correctement la sortie de la commande diagnose ips anomaly list ?",
    R: [
      "Liste la politique DoS configurée.",
      "Liste les compteurs en temps réel pour la politique DoS configurée.",
      "Liste les erreurs capturées lors de la compilation de la politique DoS.",
      "Liste les correspondances des signatures IPS."
    ],
    BR: [1]
  },
  {
    Q: "Examinez la sortie de débogage IKE pour IPsec présentée dans l'illustration ci-dessous. Quelle est l'affirmation correcte concernant cette sortie ?",
    R: [
      "Le résultat est une négociation de phase 1.",
      "Le résultat est une négociation de phase 2.",
      "La sortie capture les messages de détection des pairs morts.",
      "La sortie capture les paquets de détection de passerelle morte."
    ],
    BR: [2]
  },
  {
    Q: "Comment configurer un FortiGate pour appliquer la mise en forme du trafic au trafic P2P, tel que BitTorrent ?",
    R: [
      "Appliquer une mise en forme du trafic à une entrée Bit Torrent dans une liste de contrôle des applications, qui est ensuite appliquée à une politique de pare-feu.",
      "Activez l'option de forme dans une politique de pare-feu dont le service est réglé sur BitTorrent.",
      "Définissez une règle DLP qui correspond au trafic Bit Torrent et incluez la règle dans un capteur DLP avec la mise en forme du trafic activée.",
      "Appliquer une mise en forme du trafic à un profil d'options de protocole."
    ],
    BR: [0]
  },
  {
    Q: "La figure ci-dessous est une capture d'écran d'un profil de contrôle d'application. Sélectionnez le numéro identifiant le paramètre qui fournira des informations supplémentaires sur l'accès à YouTube, comme le nom de la vidéo regardée. (502)",
    R: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    BR: [3]
  },
  {
    Q: "Comment les signatures de contrôle des applications sont-elles mises à jour sur un appareil FortiGate ?",
    R: [
      "Grâce aux mises à jour de FortiGuard.",
      "Mettez à niveau le micrologiciel FortiOS vers une version plus récente.",
      "En exécutant la fonction d'apprentissage automatique du Contrôle des applications.",
      "Les signatures sont codées en dur sur l'appareil et ne peuvent pas être mises à jour."
    ],
    BR: [0]
  },
  {
    Q: "Quelle réponse décrit le mieux ce qu'est une \"application inconnue\" ?",
    R: [
      "Tout le trafic qui correspond à la signature interne pour les applications inconnues.",
      "Le trafic qui ne correspond pas au modèle RFC pour son protocole.",
      "Tout trafic qui ne correspond pas à une signature de contrôle d'application",
      "Un paquet qui échoue au contrôle CRC."
    ],
    BR: [2]
  },
  {
    Q: "Quelles actions sont possibles avec le Contrôle des applications ? (Choisissez-en trois.) (505)",
    R: [
      "Avertissez",
      "Autoriser",
      "Bloc",
      "Modélisation du trafic",
      "Quarantaine"
    ],
    BR: [1, 2, 4]
  },
  {
    Q: "Un utilisateur derrière la FortiGate essaie d'aller sur (Addicting.Games). Sur la base de cette configuration, quelle affirmation est vraie ?",
    R: [
      "Addicting.Games est autorisé en fonction de la configuration de l'Application Overrides.",
      "Addicting.Games est bloqué en fonction de la configuration de Filter Overrides.",
      "Addicting.Games ne peut être autorisé que si l'action Filter Overrides est définie sur Exempt.",
      "Addicting.Games est autorisé en fonction de la configuration des catégories."
    ],
    BR: [0]
  },
  {
    Q: "Quelles déclarations concernant le contrôle des applications sont vraies ? (Choisissez-en deux.)",
    R: [
      "L'activation du profil de contrôle des applications dans un profil de sécurité permet le contrôle des applications pour tout le trafic passant par la FortiGate.",
      "Il ne peut pas agir sur des demandes inconnues.",
      "Il peut inspecter le trafic crypté.",
      "Il peut identifier le trafic d'applications connues, même lorsqu'elles utilisent des ports TCP/UDP non standard."
    ],
    BR: [2, 3]
  },
  {
    Q: "Quelles sont les affirmations vraies concernant la mise en forme du trafic qui est appliquée dans un capteur d'application et associée à une politique de pare-feu ? (Choisissez-en deux.)",
    R: [
      "La mise en forme du trafic partagé ne peut pas être utilisée.",
      "Seul le trafic correspondant à la signature de contrôle des applications est mis en forme.",
      "Peut limiter l'utilisation de la bande passante des applications à fort trafic.",
      "La mise en forme du trafic par IP ne peut pas être utilisée."
    ],
    BR: [1, 2]
  },
  {
    Q: "Lesquels des énoncés suivants sont vrais concernant le contrôle des applications ? (Choisissez-en deux.)",
    R: [
      "Le contrôle des applications est basé sur les numéros de port de destination TCP.",
      "Le contrôle des applications est basé sur le proxy.",
      "Le trafic crypté peut être identifié par le contrôle des applications.",
      "La mise en forme du trafic peut être appliquée au trafic d'application détecté."
    ],
    BR: [2, 3]
  },
  {
    Q: "La figure ci-dessous est une capture d'écran d'un profil de contrôle d'application. Sélectionnez le numéro identifiant le paramètre qui fournira des informations supplémentaires sur l'accès à YouTube, comme le nom de la vidéo regardée. (510)",
    R: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    BR: [3]
  },
    {
    Q: "Parmi les paramètres suivants, lequel ne peut pas être configuré différemment pour chaque VDOM ?",
    R: [
      "Les routes statiques",
      "Les règles de pare-feu",
      "L'heure système",
      "Le mode de fonctionnement (Operating mode) : NAT/route ou transparent"
    ],
    BR: [2]
  },
  {
    Q: "Parmi les choix suivants, lequel est un mode de fonctionnement pris en charge par un appareil FortiGate ?",
    R: [
      "Balancement de charge",
      "Hors ligne",
      "Proxy",
      "NAT / route"
    ],
    BR: [3]
  },
  {
    Q: "Laquelle des affirmations suivantes est correcte concernant les VDOM multiples configurés dans un FortiGate ?",
    R: [
      "Les modèles FortiGate FGT60D et supérieurs prennent en charge les VDOM.",
      "Tous les dispositifs FortiGate peuvent supporter 250 VDOMS par défaut.",
      "Les appareils FortiGate prennent en charge plus de VDOM en mode NAT/route que de VDOM en transparent.",
      "Chaque VDOM nécessite sa propre licence FortiGuard."
    ],
    BR: [0]
  },
  {
    Q: "Quelle affirmation est fausse concernant la correspondance des sources dans une règle de pare-feu ?",
    R: [
      "Un périphérique source doit nécessairement être sélectionné dans une règle de pare-feu.",
      "Une interface source doit nécessairement être sélectionnée dans une règle de pare-feu.",
      "Un utilisateur source peut être sélectionné dans une règle de pare-feu.",
      "Une adresse source doit nécessairement être sélectionnée dans une règle de pare-feu.",
      "Un périphérique source peut être sélectionné dans une règle de pare-feu."
    ],
    BR: [0]
  },
  {
    Q: "Quelle affirmation est fausse en ce qui concerne les domaines virtuels FortiGate (VDOM) ?",
    R: [
      "S'il y a des VDOM, on peut sauvegarder leur configuration individuellement.",
      "Le même compte administrateur doit être utilisé pour la gestion des différents VDOM d'un FortiGate.",
      "Tout le trafic généré par le FortiGate lui-même provient du VDOM de gestion.",
      "Chaque interface est membre d'un seul VDOM."
    ],
    BR: [1]
  },
  {
    Q: "Parmi les propositions suivantes, laquelle est une méthode de configuration de la NAT sur un FortiGate ?",
    R: [
      "NAT/Route mode",
      "NAT inspection",
      "Firewall Policy NAT mode",
      "Transparent NAT mode",
      "NAT 64 mode"
    ],
    BR: [2]
  },
  {
    Q: "Dans quel ordre les règles de pare-feu sont-elles traitées sur un appareil FortiGate ?",
    R: [
      "De haut en bas, en fonction de leur numéro d'ordre (Sequence number).",
      "En fonction de la meilleure correspondance.",
      "En fonction de la valeur de priorité de la règle.",
      "De haut en bas, en fonction de leur numéro d'identification (Policy ID)."
    ],
    BR: [0]
  },
  {
    Q: "S'il n'y a pas de changement dans la table de routage et dans le cas du trafic TCP, lequel des éléments suivants décrit correctement les recherches dans la table de routage effectuées par un FortiGate en mode NAT/Route, lors de la recherche d'une route ?",
    R: [
      "Une recherche est effectuée lorsque le premier paquet provenant du client (SYN) arrive, et une seconde est effectuée lorsque le premier paquet provenant du serveur (SYN/ACK) arrive.",
      "Une recherche est toujours effectuée, même après la poignée de main TCP, à chaque fois qu'un paquet arrive, que ce soit du côté du serveur ou du côté du client.",
      "Trois recherches sont effectuées lors de la poignée de main TCP en trois étapes (SYN, SYN/ACK, ACK).",
      "Une recherche est effectuée uniquement lorsque le premier paquet provenant du client arrive (SYN)."
    ],
    BR: [3]
  },
  {
    Q: "Quelle proposition ne correspond pas à un avantage de la journalisation ?",
    R: [
      "Aide à établir une ligne de base.",
      "Facilite le maintien de la confidentialité des données sensibles",
      "Permet de garder une trace des virus détectés.",
      "Permet de disposer de données pour localiser certains problèmes.",
      "Les données récoltées permettent de réaliser des statistiques.",
      "Apporte de la visibilité en permettant de mieux connaitre les activités sur le réseau."
    ],
    BR: [1]
  },
  {
    Q: "Un fichier de sauvegarde commence par la ligne affichée ci-dessous (#config-version=FGVM64-5.02-FW-build589...). Pouvez-vous le restaurer sur un FortiWiFi 60D ?",
    R: [
      "non",
      "Oui, mais seulement en modifiant le paramètre « #conf_file_ver » de manière à ce que la valeur corresponde au numéro de série de ce FortiWiFi 60D.",
      "oui",
      "Oui, mais seulement s'il fonctionne avec la même version de FortiOS, ou une version compatible plus récente."
    ],
    BR: [0]
  },
  {
    Q: "Quelle affirmation est vraie concernant la table de session d'un FortiGate ?",
    R: [
      "Elle ne renseigne pas les codes d'état de connexion UDP ou ICMP, car ces protocoles sont sans connexion.",
      "Elle renseigne les états de connexion TCP.",
      "La NAT/PAT n'est pas renseignée dans la table de session, elle l'est dans la table « Central NAT ».",
      "Elle renseigne les sessions IP, SSL et HTTP."
    ],
    BR: [1]
  },
  {
    Q: "Quelle affirmation est vraie concernant les interfaces entrantes et sortantes dans les règles d'un pare-feu FortiGate ?",
    R: [
      "Une interface physique ne peut pas être utilisée.",
      "Les interfaces sources et destination sont obligatoires.",
      "Les interfaces multiples (comme « all ») ne peuvent pas être utilisées à la fois pour les entrées et les sorties.",
      "Une zone ne peut pas être utilisée."
    ],
    BR: [1]
  },
  {
    Q: "Laquelle des affirmations suivantes est fausse en ce qui concerne le contrôle d'applications ?",
    R: [
      "Le scan du contrôle d'applications est toujours de type flow-based",
      "Avec le mode « NGFW Policy-based » il est possible de configurer le contrôle d'application directement au niveau de la règle de pare-feu.",
      "Le trafic chiffré peut être identifié par le contrôle d'applications grâce à l'utilisation de l'inspection SSL/SSH.",
      "Le contrôle des applications est basé sur les numéros de port de destination TCP."
    ],
    BR: [3]
  },
  {
    Q: "Quelle mesure est prise par le FortiGate à l'expiration du minuteur lié au « link health monitor » ?",
    R: [
      "Toutes les routes vers le sous-réseau de destination configuré dans le « link health monitor » sont supprimées de la table de routage",
      "Toutes les routes utilisant la passerelle (next-hop) configurée dans le « link health monitor » sont supprimées de la table de routage",
      "Les valeurs de priorité de toutes les routes utilisant l'interface configurée dans le « link health monitor » sont augmentées de la valeur définie.",
      "Les valeurs de distance administrative de toutes les routes utilisant l'interface configurée dans le « link health monitor » sont augmentées de la valeur définie",
      "Les valeurs de métrique de toutes les routes utilisant l'interface configurée dans le « link health monitor » sont augmentées de la valeur définie"
    ],
    BR: [1]
  },
  {
    Q: "Vers quel appareil distant un FortiGate ne peut-il pas envoyer des fichiers journaux (logs) ?",
    R: [
      "Serveur Syslog",
      "FortiCloud",
      "FortiAnalyzer",
      "FortiManager",
      "FortiSandbox"
    ],
    BR: [4]
  },
  {
    Q: "Quelle affirmation est fausse en ce qui concerne les domaines virtuels FortiGate (VDOM) ?",
    R: [
      "Le mode multi-VDOM permet d'allouer les ressources de telle sorte que le FortiGate peut utiliser plus de quantité de mémoire que la quantité de mémoire physiquement disponible.",
      "Pour interconnecter deux VDOM à l'aide d'un VDOM-link, au moins un des VDOM doit être en mode NAT/route.",
      "Par défaut le VDOM root joue le rôle de VDOM de gestion",
      "Le mode Split-vdom contient 2 VDOM prédéfinis : VDOM Root et VDOM FG-Traffic."
    ],
    BR: [0]
  },
  {
    Q: "Quelle affirmation est vraie concernant l'entrée de journal présentée ci-dessous (date=2018-05-20, user=admin, ui=http(192.168.1.11), action=login, status=success) ?",
    R: [
      "Le journal concerne un téléchargement de fichier via FTP.",
      "L'adresse IP de l'interface FortiGate à laquelle \"l'administrateur\" s'est connecté était 192.168.1.11",
      "La connexion n'était pas chiffrée.",
      "La raison du succès de la connexion est qu'aucun mot de passe administrateur n'est configuré."
    ],
    BR: [1]
  },
  {
    Q: "Dans quel ordre les règles de pare-feu sont-elles traitées dans un FortiGate ?",
    R: [
      "De haut en bas, en fonction de leur numéro de séquence (sequence number).",
      "En fonction de la valeur de priorité (Priority).",
      "De haut en bas, en fonction de leur numéro d'identification (Policy ID).",
      "En fonction de la meilleure correspondance (Best match)."
    ],
    BR: [0]
  },
  {
    Q: "Quelle méthode peut être utilisée pour délivrer le code du jeton à un utilisateur lors de l'utilisation d'une authentification à deux facteurs ?",
    R: [
      "Utiliser la technique décrite dans la RFC 1149 : envoyer un pigeon voyageur.",
      "Afficher un pop-up dans une fenêtre de navigateur.",
      "Utiliser un certificat numérique.",
      "Utiliser un portail Web.",
      "Utiliser FortiToken."
    ],
    BR: [4]
  },
  {
    Q: "Parmi les propositions suivantes, laquelle ne correspond pas à un des huit niveaux de gravité qui indiquent l'importance d'un événement journalisé ?",
    R: [
      "Emergency",
      "Alert",
      "Notification",
      "Critical",
      "Informational",
      "Notify"
    ],
    BR: [5]
  },
  {
    Q: "Un FortiGate possède plusieurs VDOM en NAT/route avec plusieurs interfaces VLAN dans chaque VDOM. Laquelle des affirmations suivantes est correcte concernant les adresses IP attribuées à chaque interface VLAN ?",
    R: [
      "Différents VLAN peuvent utiliser la même adresse IP tant qu'ils ont des ID de VLAN différents.",
      "Différents VLAN peuvent utiliser la même adresse IP tant qu'ils se trouvent dans des interfaces physiques différentes.",
      "Différents VLAN peuvent utiliser la même adresse IP tant qu'ils se trouvent dans des VDOM différentes.",
      "Des VLANS différents ne peuvent jamais utiliser les mêmes adresses IP."
    ],
    BR: [2]
  },
  {
    Q: "Quel champ d'en-tête peut être utilisé dans une règle de pare-feu pour la correspondance du trafic ? (Q24)",
    R: [
      "La taille de la fenêtre TCP.",
      "Le type et le code ICMP.",
      "Le champ DSCP.",
      "Le numéro de séquence TCP."
    ],
    BR: [1]
  },
  {
    Q: "L'administrateur d'un FortiGate avec le profil super_admin configure un domaine virtuel (VDOM) pour un nouveau client. Après avoir créé le VDOM, l'administrateur ne peut pas réaffecter l'interface dmz au nouveau VDOM car l'option est grisée dans l'interface graphique du VDOM de gestion. Quelle serait la cause possible de ce problème ?",
    R: [
      "Les VDOM qui ne sont pas des VDOM de gestion ne peuvent pas référencer les interfaces physiques.",
      "L'interface dmz est référencée dans la configuration d'un autre VDOM.",
      "L'administrateur n'a pas les permissions appropriées pour l'interface dmz.",
      "L'interface dmz est en mode PPPoE ou DHCP."
    ],
    BR: [1]
  },
  {
    Q: "Quelle affirmation est fausse concernant le routage basé sur des règles (Policy-based routing) ?",
    R: [
      "Si aucune règle ne correspond au trafic, alors la table de routage traditionnelle est utilisée.",
      "Les règles ne sont pas lues dans l'ordre séquentiel mais selon la meilleure correspondance.",
      "Ces routes sont maintenues dans la table « Policy Routing », séparée de la table de routage.",
      "Une nouvelle règle de routage est par défaut placée à la fin de la liste des règles."
    ],
    BR: [1]
  },
  {
    Q: "Quelle méthode de translation d'adresse n'existe pas en mode Firewall Policy NAT ?",
    R: [
      "IP pool type : Fixed port range",
      "IP pool type : One-to-many",
      "IP pool type : One-to-one",
      "IP pool type : Overload"
    ],
    BR: [1]
  },
  {
    Q: "Quel champ d'en-tête peut être utilisé dans une règle de pare-feu pour la correspondance du trafic ? (Q28)",
    R: [
      "Les types et les codes ICMP",
      "La taille de fenêtre TCP.",
      "Les numéros de séquence TCP.",
      "Les bits DSCP."
    ],
    BR: [0]
  },
  {
    Q: "Quel protocole faut-il utiliser pour l'accès administratif à un FortiGate ?",
    R: [
      "FGCP",
      "SMTP",
      "Telnet",
      "HTTP",
      "SSH",
      "NTLM"
    ],
    BR: [4]
  },
  {
    Q: "Quelle affirmation est vraie concernant les numéros d'identification (Policy ID) des règles de pare-feu ?",
    R: [
      "Ces ID définissent l'ordre dans lequel les règles sont traitées.",
      "Ces ID représentent le nombre d'objets utilisés dans la règle de pare-feu.",
      "Ces ID changent lorsque les règles de pare-feu sont réorganisées.",
      "Ces ID sont nécessaires pour modifier une règle pare-feu à partir de la CLI."
    ],
    BR: [3]
  },
  {
    Q: "Une route statique est configurée comme présenté ci-dessous (Destination: 172.16.1.0/255.255.255.0, Gateway: 192.168.100.1, Administrative Distance: 20, Priority: 0). Laquelle des conditions proposées est requise pour que cette route statique soit affichée dans la table de routage ?",
    R: [
      "La priorité doit avoir une valeur supérieure à 0.",
      "Le réseau 172.16.1.0 doit être directement connecté.",
      "Toutes les autres routes par défaut doivent avoir une distance administrative inférieure.",
      "L'adresse IP de l'interface de sortie et l'adresse IP de tronçon suivant (Gateway) doivent se trouver sur le même sous-réseau.",
      "Le statut administratif de l'interface doit être affiché comme étant « down »."
    ],
    BR: [1]
  },
  {
    Q: "Dans la configuration du contrôle d'applications, quelle proposition décrit le mieux ce qu'est une application inconnue (« Unknown Application ») ?",
    R: [
      "Tout trafic qui correspond à la signature d'une application inconnue.",
      "Tout trafic qui échoue au contrôle du CRC.",
      "Tout trafic qui ne correspond pas à la définition RFC de son protocole.",
      "Tout trafic qui ne correspond pas à une signature de contrôle d'application.",
      "Tout trafic ne provenant pas d'un protocole utilisé par un partenaire de l'entreprise et défini dans une white list."
    ],
    BR: [3]
  },
  {
    Q: "Quelle proposition n'est pas une fonction d'un FortiGate ?",
    R: [
      "Contrôle d'application (Application control)",
      "Inspection SSL/SSH",
      "Prévention des intrusions (IPS, Intrusion Prevention System)",
      "Prévention de la fuite de données (DLP, Data Leak Prevention)",
      "Audit d'une base de données (Audit db)",
      "Antivirus"
    ],
    BR: [4]
  },
  {
    Q: "Quel est le processus de récupération de mot de passe sur un FortiGate ?",
    R: [
      "Maintenir les touches CTRL + Esc enfoncées pendant le redémarrage, puis entrer les commandes de réinitialisation du mot de passe administrateur.",
      "Se connecter en mode console en utilisant le compte « maintaner » dans les quelques secondes qui suivent la mise sous tension physique du FortiGate, puis entrer les commandes de réinitialisation du mot de passe administrateur.",
      "Interrompre la séquence de CTRL + BREAK, modifier le registre de démarrage et redémarrer. Après avoir modifié le mot de passe, réinitialisez le registre d'amorçage.",
      "Interrompre la séquence de démarrage CTRL + BREAK puis restaurer un fichier de configuration dont le mot de passe a été modifié."
    ],
    BR: [1]
  },
  {
    Q: "Parmi les suivantes, laquelle n'est pas un type de « traffic shaping » disponible sur un FortiGate ?",
    R: [
      "Per-IP shaper",
      "Reverse shaper",
      "Global shaper",
      "Shared shaper"
    ],
    BR: [2]
  },
  {
    Q: "Quelle affirmation est vraie en ce qui concerne les numéros d'identification (Policy ID) des règles de pare-feu ?",
    R: [
      "Ils représentent le nombre d'objets utilisés dans la règle de pare-feu.",
      "Ils définissent l'ordre dans lequel les règles sont traitées.",
      "Ils changent lorsque les politiques de pare-feu sont réorganisées.",
      "Ils sont nécessaires pour modifier une règle de pare-feu à partir de la CLI."
    ],
    BR: [3]
  },
  {
    Q: "Quelle action n'est pas possible avec le contrôle d'applications ?",
    R: [
      "Allow",
      "Monitor",
      "Exempt",
      "Block",
      "Quarantine"
    ],
    BR: [2]
  }




];




  



