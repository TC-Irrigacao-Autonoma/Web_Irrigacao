-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 13-Nov-2020 às 14:51
-- Versão do servidor: 10.4.11-MariaDB
-- versão do PHP: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `bdarduino`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbsensores`
--

CREATE TABLE `sensores` (
  `id` int(15) NOT NULL,
  `umidadeSolo` varchar(15) NOT NULL,
  `sensorChuva` varchar(15) NOT NULL,
  `temperatura` varchar(15) NOT NULL,
  `umidadeAr` varchar(15) NOT NULL,
  `valvulaSolenoide` varchar(20) NOT NULL,
  `datatb` varchar(15) NOT NULL,
  `hora` varchar(15) NOT NULL,
  `horatb` time NOT NULL,
  `dataHora` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tbsensores`
--

INSERT INTO `tbsensores` (`id`, `umidadeSolo`, `sensorChuva`, `temperatura`, `umidadeAr`, `valvulaSolenoide`, `datatb`, `hora`, `horatb`, `dataHora`) VALUES
(257, '60', 'SEM CHUVA', '29', '45', 'DESLIGADO', '19/10', '', '00:00:00', '2020-11-13 10:11:42'),
(258, '57', 'SEM CHUVA', '30', '38', 'LIGADO', '20/10', '', '00:00:00', '2020-11-13 10:11:42'),
(259, '55', 'SEM CHUVA', '35', '29', 'LIGADO', '21/10', '', '00:00:00', '2020-11-13 10:11:42'),
(260, '60', 'SEM CHUVA', '29', '35', 'DESLIGADO', '22/10', '', '00:00:00', '2020-11-13 10:11:42'),
(261, '89', 'COM CHUVA', '25', '65', 'DESLIGADO', '23/10', '', '00:00:00', '2020-11-13 10:11:42'),
(262, '85', 'COM CHUVA', '23', '70', 'DESLIGADO', '24/10', '', '00:00:00', '2020-11-13 10:11:42'),
(263, '70', 'SEM CHUVA', '28', '60', 'DESLIGADO', '25/10', '', '00:00:00', '2020-11-13 10:11:42'),
(265, '66', 'SEM CHUVA', '23', '39', 'DESLIGADO', '', '00:00:00', '00:00:00', '2020-11-13 10:11:42'),
(266, '65', 'SEM CHUVA', '22', '45', 'DESLIGADO', '', '01:00:00', '01:00:00', '2020-11-13 10:11:42'),
(267, '65', 'SEM CHUVA', '22', '39', 'DESLIGADO', '', '02:00:00', '02:00:00', '2020-11-13 10:11:42'),
(268, '64', 'SEM CHUVA', '23', '39', 'DESLIGADO', '', '03:00:00', '03:00:00', '2020-11-13 10:11:42'),
(269, '63', 'SEM CHUVA', '24', '39', 'DESLIGADO', '', '04:00:00', '04:00:00', '2020-11-13 10:11:42'),
(270, '64', 'SEM CHUVA', '24', '36', 'DESLIGADO', '', '05:00:00', '05:00:00', '2020-11-13 10:11:42'),
(271, '62', 'SEM CHUVA', '25', '35', 'DESLIGADO', '', '06:00:00', '06:00:00', '2020-11-13 10:11:42'),
(272, '60', 'SEM CHUVA', '25', '35', 'DESLIGADO', '', '07:00:00', '07:00:00', '2020-11-13 10:11:42'),
(273, '56', 'SEM CHUVA', '27', '30', 'DESLIGADO', '', '08:00:00', '08:00:00', '2020-11-13 10:11:42'),
(274, '56', 'SEM CHUVA', '26', '30', 'DESLIGADO', '', '09:00:00', '09:00:00', '2020-11-13 10:11:42'),
(275, '55', 'SEM CHUVA', '30', '31', 'DESLIGADO', '', '10:00:00', '10:00:00', '2020-11-13 10:11:42'),
(276, '55', 'SEM CHUVA', '31', '32', 'DESLIGADO', '', '11:00:00', '11:00:00', '2020-11-13 10:11:42'),
(277, '52', 'SEM CHUVA', '33', '28', 'DESLIGADO', '', '12:00:00', '12:00:00', '2020-11-13 10:11:42'),
(278, '51', 'SEM CHUVA', '35', '25', 'LIGADO', '', '13:00:00', '13:00:00', '2020-11-13 10:11:42'),
(279, '49', 'SEM CHUVA', '36', '23', 'LIGADO', '', '14:00:00', '14:00:00', '2020-11-13 10:11:42'),
(280, '50', 'SEM CHUVA', '38', '20', 'LIGADO', '', '15:00:00', '15:00:00', '2020-11-13 10:11:42'),
(281, '58', 'SEM CHUVA', '37', '19', 'LIGADO', '', '16:00:00', '16:00:00', '2020-11-13 10:11:42'),
(282, '60', 'SEM CHUVA', '37', '19', 'DESLIGADO', '', '17:00:00', '17:00:00', '2020-11-13 10:11:42'),
(283, '60', 'SEM CHUVA', '36', '18', 'DESLIGADO', '', '18:00:00', '18:00:00', '2020-11-13 10:11:42'),
(284, '59', 'SEM CHUVA', '34', '19', 'DESLIGADO', '', '19:00:00', '19:00:00', '2020-11-13 10:11:42'),
(285, '59', 'SEM CHUVA', '31', '22', 'DESLIGADO', '', '20:00:00', '20:00:00', '2020-11-13 10:11:42'),
(286, '58', 'SEM CHUVA', '31', '25', 'DESLIGADO', '', '21:00:00', '21:00:00', '2020-11-13 10:11:42'),
(287, '58', 'SEM CHUVA', '28', '25', 'DESLIGADO', '', '22:00:00', '22:00:00', '2020-11-13 10:11:42'),
(288, '57', 'SEM CHUVA', '25', '35', 'DESLIGADO', '', '23:00:00', '23:00:00', '2020-11-13 10:11:42');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `tbsensores`
--
ALTER TABLE `tbsensores`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `tbsensores`
--
ALTER TABLE `tbsensores`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=289;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
