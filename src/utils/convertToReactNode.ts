import { createElement, ReactNode } from "react";
import { convertToCamelCase } from "./convertToCamelCase";

export function convertToReactNode(node: Element): ReactNode {
  const typeEl = node.nodeName.toLowerCase();

  const children = Array.from(node.childNodes).map((node) => {
    return node.nodeType === Node.TEXT_NODE
      ? node.textContent
      : convertToReactNode(node as Element);
  });

  const attributes = Array.from(node.attributes)
    .map((attribute) => {
      if (attribute.name === "width" || attribute.name === "height") {
        return null;
      }
      const name = attribute.name.includes("-")
        ? convertToCamelCase(attribute.name)
        : attribute.name;
      return {
        [name]: attribute.value,
      };
    })
    .reduce((res, attr) => {
      return { ...res, ...attr };
    }, {});

  return createElement(typeEl, { ...attributes }, ...children);
}
