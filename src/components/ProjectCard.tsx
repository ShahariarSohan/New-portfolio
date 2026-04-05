"use client";

import {
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
  Media,
  Tag,
  Row,
} from "@once-ui-system/core";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
  frontendRepo?: string;
  backendRepo?: string;
  backendLive?: string;
  tags?: string[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  link,
  frontendRepo,
  backendRepo,
  backendLive,
  tags = [],
  priority,
}) => {
  return (
    <Column fillWidth gap="m" style={{ borderRadius: "var(--radius-l)", overflow: "hidden", border: "1px solid var(--neutral-border-weak)" }}>
      {/* Thumbnail */}
      {images.length > 0 && (
        <Media
          priority={priority}
          sizes="(max-width: 960px) 100vw, 960px"
          aspectRatio="16 / 9"
          radius="none"
          alt={title}
          src={images[0]}
        />
      )}

      <Flex
        s={{ direction: "column" }}
        fillWidth
        paddingX="24"
        paddingTop="16"
        paddingBottom="24"
        gap="16"
      >
        {/* Title */}
        {title && (
          <Heading as="h2" wrap="balance" variant="heading-strong-l">
            {title}
          </Heading>
        )}

        {/* Description */}
        {description?.trim() && (
          <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak">
            {description}
          </Text>
        )}

        {/* Tags */}
        {tags.length > 0 && (
          <Flex gap="8" wrap>
            {tags.map((tag) => (
              <Tag key={tag} label={tag} size="s" />
            ))}
          </Flex>
        )}

        {/* Links */}
        <Flex gap="16" wrap marginTop="8">
          {content?.trim() && (
            <SmartLink
              suffixIcon="arrowRight"
              style={{ margin: "0", width: "fit-content" }}
              href={href}
            >
              <Text variant="body-default-s">Read case study</Text>
            </SmartLink>
          )}
          {link && (
            <SmartLink
              suffixIcon="arrowUpRightFromSquare"
              style={{ margin: "0", width: "fit-content" }}
              href={link}
            >
              <Text variant="body-default-s">Live demo</Text>
            </SmartLink>
          )}
          {frontendRepo && (
            <SmartLink
              suffixIcon="arrowUpRightFromSquare"
              style={{ margin: "0", width: "fit-content" }}
              href={frontendRepo}
            >
              <Text variant="body-default-s">Frontend repo</Text>
            </SmartLink>
          )}
          {backendRepo && (
            <SmartLink
              suffixIcon="arrowUpRightFromSquare"
              style={{ margin: "0", width: "fit-content" }}
              href={backendRepo}
            >
              <Text variant="body-default-s">Backend repo</Text>
            </SmartLink>
          )}
          {backendLive && (
            <SmartLink
              suffixIcon="arrowUpRightFromSquare"
              style={{ margin: "0", width: "fit-content" }}
              href={backendLive}
            >
              <Text variant="body-default-s">Backend live</Text>
            </SmartLink>
          )}
        </Flex>
      </Flex>
    </Column>
  );
};
