INSERT INTO `answers` (`id_answer_pk`, `answer`, `user_fk`, `creation_date`) VALUES
(1, 'Un plan financier prévisionnel est obligatoire si vous souhaitez constituer une société à responsabilité limitée (SRL, SA, SC). Il sera également exigé si  vous souhaitez emprunter des fonds auprès d’une banque ou si vous sollicitez le bénéfice de certaines aides.\r\n\r\nDans d’autres cas, même s’il n’est pas légalement ou contractuellement obligatoire, le plan financier reste vivement conseillé.\r\n\r\nUCM et son service de Développement Economique (rubrique \"Entreprendre\") sont à votre disposition pour en parler et pour élaborer votre plan de route économique et financier.', 2, '2019-10-25 16:03:09');
INSERT INTO `answers_x_categories` (`id_categorie_fk`, `id_answer_fk`) VALUES
(1, 1);
INSERT INTO `answers_x_job_domains` (`id_job_domain_fk`, `id_answer_fk`) VALUES
(1, 1);
INSERT INTO `answers_x_path_steps` (`id_path_step_fk`, `id_answer_fk`) VALUES
(1, 1);
INSERT INTO `categories` (`id_categorie_pk`, `label`, `description`) VALUES
(1, 'VAT', ''),
(2, 'Hiring', '');
INSERT INTO `claims` (`id_claim_pk`, `id_question_fk`, `id_user_fk`, `creation_date`) VALUES
(1, 2, 2, '2019-10-25 16:06:19');

INSERT INTO `job_domains` (`id_job_domain_pk`, `label`, `description`) VALUES
(1, 'Administration & Legislation', ''),
(2, 'Building & construction', ''),
(3, 'Communication', ''),
(4, 'Culture', ''),
(5, 'Economics & Management', ''),
(6, 'Environment & Nature', ''),
(7, 'Hotels & Food', ''),
(8, 'IT and telecommunications', ''),
(9, 'Health & Well-being', ''),
(10, 'Science', ''),
(11, 'Humanities & Social Sciences', ''),
(12, 'Security', ''),
(13, 'Technical & Industry', ''),
(14, 'Tourism, sport and leisure', ''),
(15, 'Transport & logistics', '');
INSERT INTO `legal_status` (`id_legal_status_pk`, `label`, `description`) VALUES
(1, 'SPRL', ''),
(2, 'SA', '');
INSERT INTO `path_steps` (`id_path_step_pk`, `label`, `description`, `rank`) VALUES
(1, 'I wish become self-employee', '', 1),
(2, 'I wish to take over a business', '', 2),
(3, 'My business project is validated', '', 3),
(4, 'My business is growing', '', 4),
(5, 'I\'m hiring staff', '', 5),
(6, 'I manage my collaborators', '', 6),
(7, 'I give in to my business', '', 7),
(8, 'I\'m reaching retirement age', '', 8);

INSERT INTO `questions` (`id_question_pk`, `question`, `user_fk`, `creation_date`, `status`, `comments`) VALUES
(1, 'Dois-je avoir un business plan ou un plan financier pour me lancer ? ', 1, '2019-10-25 15:59:11', 'sent', ''),
(2, 'J\'exerce une profession libérale, dois-je disposer d\'un numéro d\'entreprise ?', 1, '2019-10-25 15:59:44', 'sent', '');
INSERT INTO `self_employed_status` (`id_self_employed_status_pk`, `label`, `description`) VALUES
(1, 'Full self-employed', ''),
(2, 'Complementary self-employed', '');

INSERT INTO `users_table` (`id_user_pk`, `email`, `login`, `password`, `creation_date`, `id_path_step_fk`, `id_job_domain_fk`, `id_self_employed_status_fk`, `id_legal_status_fk`) VALUES
(1, 'serge.bayet1975@gmail.com', 'Serge', 'test', '2019-10-25 15:58:35', 1, 8, 2, 1),
(2, 'caroline.ziane@gmail.com', 'caroline', 'test', '2019-10-25 16:02:43', 6, 1, NULL, NULL);

INSERT INTO `users_x_user_types` (`id_user_fk`, `id_user_type_fk`) VALUES
(1, 7);


INSERT INTO `user_types` (`id_user_type_pk`, `label`) VALUES
(5, 'community'),
(6, 'specialist'),
(7, 'administrator'),
(8, 'translator');


INSERT INTO `votes` (`id_vote_pk`, `type`, `id_answer_fk`, `id_user_fk`, `creation_date`) VALUES
(1, 'up-vote', 1, 1, '2019-10-25 16:05:44');
